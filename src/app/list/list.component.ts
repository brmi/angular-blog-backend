import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [BlogService]
})
export class ListComponent implements OnInit {
  listItem = ['list1', 'list2', 'list3'];

  constructor(private blogService: BlogService) {}

  ngOnInit() {}

}
