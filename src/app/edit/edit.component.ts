import { Component, OnInit, Input } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListComponent } from '../list/list.component';

@Component({
  selector: '[app-edit]',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  // providers: [BlogService]
})

export class EditComponent implements OnInit {

  post: Post; 
  disableSave = true;
  savedPost = false;
  deletedPost = false;
  currentPostid: number;

  constructor(private blogService: BlogService,
    private route: ActivatedRoute, private router: Router) {
    this.currentPostid= this.route.snapshot.params['id'];
    console.log('inside edit componenet: currentPostID', this.currentPostid);
    this.post = this.blogService.getPost(this.currentPostid);

    console.log('inside edit component: fetched post is: ', this.post);
    
    if(!this.post){
      console.log("invalid postid");
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    // when component is initialized
    // this.currentPostid= this.route.snapshot.params['id'];
    // this.post = this.blogService.getPost(this.currentPostid);

      this.route.params.subscribe(
        (params: Params) => {
          this.post.postid = parseInt(params['id']);
          this.currentPostid = parseInt(params['id']);
          this.post = this.blogService.getPost(parseInt(params['id']));
        }
      );
      console.log("INSIDE ngOnInit() of edit component: this.post = ", this.post);

  }

  tempSave() {
    console.log("INSIDE tempSave() of edit component");
    this.blogService.updatePost(this.post);
    let tempPost: Post =  this.blogService.getPost(this.currentPostid);
    this.savedPost = true;
    // this.router.navigate(['/edit', this.currentPostid]);
  }

  onSave() {
    this.blogService.updatePost(this.post);
    let tempPost: Post =  this.blogService.getPost(this.currentPostid);
    this.post.modified = tempPost.modified;
    this.savedPost = true;
    console.log("INSIDE onSave() in edit component");
    this.blogService.getPosts();
    // this.router.navigate(['/edit', this.currentPostid]);
    this.disableSave = true;
  }

  onDelete() {
    console.log("INSIDE onDelete() of edit component")
    // post disappear from list pane
    this.blogService.deletePost(this.currentPostid);
    this.deletedPost = true;
    this.blogService.getPosts();
    this.router.navigate(['/']);
    
  }

  allowSave() {
    this.disableSave = false;
    this.tempSave();
  }

  onLoadPreview() {
    
    // make sure to save data
    this.onSave();

    this.router.navigate(['preview', this.currentPostid]);
  }

  getPost(): void {
    console.log("INSIDE getPost() of edit component")
    const currentPostid = +this.route.snapshot.paramMap.get('id');
  }

}
