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
      console.log('INSIDE List component.. calling this.blogService.getPosts()');
      this.posts = this.blogService.getPosts();
      if (this.post){
        console.log("this.post in list component constructor");
        this.selected_post = this.post.postid;
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
    console.log('INSIDE List component newPost: this.new_post = ', this.new_post);
    this.router.navigate(['edit', this.new_post.postid]);
  }

  onClickPost(post: Post, postid: number) {
    console.log("INSIDE List component onClickPost(): postid = ", postid);
    this.router.navigate(['/edit', postid]);
  }
}
