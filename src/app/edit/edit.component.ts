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
  
  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    // when component is initialized
    this.getPost();
  }

  onSave() {
    console.log("clicked onSave function");
  }

  getPost(): any {
    const currentPostid = +this.route.snapshot.paramMap.get('id');
    console.log(currentPostid);
    this.blogService.getPost(currentPostid)
      .subscribe(post => this.post = post);
  }

}
