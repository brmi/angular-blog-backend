import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [BlogService]
})
export class ListComponent implements OnInit {
  
  posts: Post[];
  new_post: Post;

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.posts =  this.blogService.getPosts();
  }

  newPost() {
    this.new_post = this.blogService.newPost();
    this.router.navigate(['edit', this.new_post.postid]);
  }
}
