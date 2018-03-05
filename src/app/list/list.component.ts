import { Component, OnInit, Input } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: '[app-list]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  // providers: [BlogService]
})
export class ListComponent implements OnInit {
  @Input() post: Post;
  
  posts: Post[];
  new_post: Post;
  selected_post: number;

  constructor(private blogService: BlogService, private router: Router, 
    private route: ActivatedRoute) {
      this.posts = this.blogService.getPosts();

      if (this.post){
        this.selected_post = this.post.postid;
      } else {
        console.log("this.post was not updated. It is: ", this.post);
      }
  }

  ngOnInit() {

    
  }

  // updateTitle(): void {
  //   this.posts[this.post.postid-1].title = this.post.title;
  // }

  // getPosts(): void {
  //   this.posts =  this.blogService.getPosts();
  // }

  newPost() {
    this.new_post = this.blogService.newPost();
    this.router.navigate(['edit', this.new_post.postid]);
  }

  onClickPost(post: Post, postid: number) {
    this.post = post;
    this.router.navigate(['edit', postid]);
  }
}
