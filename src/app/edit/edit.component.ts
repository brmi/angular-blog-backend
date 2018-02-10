import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
    let tempPost: Post =  this.blogService.getPost(this.currentPostid));
    this.post.modified = tempPost.modified;
    this.savedPost = true;
  }

  allowSave() {
    this.disableSave = false;
  }

  onLoadPreview() {
    console.log("clicked onLoadPreview");
    this.router.navigate(['preview', this.currentPostid]);
  }


}
