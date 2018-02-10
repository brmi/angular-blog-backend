import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    this.currentPostid= this.route.snapshot.params['id'];
  }

  ngOnInit() {
    // when component is initialized
    this.post = this.blogService.getPost(this.currentPostid);
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



}
