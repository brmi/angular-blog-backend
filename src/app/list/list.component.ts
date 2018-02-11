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

  constructor(private blogService: BlogService, private router: Router, 
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.posts = this.blogService.getPosts();
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

  onClickPost(postid: number) {
    console.log("clicked onClickPost", postid);

    this.router.navigate(['/edit', postid]);
  }
}
