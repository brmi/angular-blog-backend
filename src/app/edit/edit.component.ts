import { Component, OnInit, Input } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [BlogService]
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
  }

  ngOnInit() {
    // when component is initialized
    this.currentPostid= this.route.snapshot.params['id'];
    this.post = this.blogService.getPost(this.currentPostid);

    this.route.params.subscribe(
      (params: Params) => {
        this.post.postid = params['id'];
        this.currentPostid = params['id'];
      }
    );
  }

  onSave() {
    console.log("clicked onSave function. postid is ", this.currentPostid);
    this.blogService.updatePost(this.post);
    let tempPost: Post =  this.blogService.getPost(this.currentPostid);
    this.post.modified = tempPost.modified;
    this.savedPost = true;
    this.blogService.getPosts();
  }

  onDelete() {
    // post disappear from list pane
    this.blogService.deletePost(this.currentPostid);
    this.deletedPost = true;
    this.blogService.getPosts();
    
  }

  allowSave() {
    this.disableSave = false;
    this.onSave();
  }

  onLoadPreview() {
    console.log("clicked onLoadPreview");
    
    // make sure to save data
    this.onSave();

    this.router.navigate(['preview', this.currentPostid]);
  }

  getPost(): void {
    const currentPostid = +this.route.snapshot.paramMap.get('id');
    console.log(currentPostid);
  }

}
