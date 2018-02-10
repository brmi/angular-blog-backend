import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [BlogService]
})
export class ListComponent implements OnInit {
  
  listItems: Post[];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.blogService.getPosts()
    .subscribe(listItems => this.listItems = listItems);
  }

}
