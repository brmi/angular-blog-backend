import { Component, OnInit } from '@angular/core';
import { Parser, HtmlRenderer } from 'commonmark';
import { Post, BlogService } from '../blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  post: Post; 
  currentPostid: number;
  resultTitle;
  resultBody;

  constructor(private blogService: BlogService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
        // when component is initialized
        this.currentPostid= this.route.snapshot.params['id'];
        this.post = this.blogService.getPost(this.currentPostid);
    
        this.route.params.subscribe(
          (params: Params) => {
            this.post.postid = params['id'];
            this.currentPostid = params['id'];
            this.post = this.blogService.getPost(params['id']);
          }
        );

        this.convertToMarkdown();
        
  }

  getPost(): void {
    const currentPostid = +this.route.snapshot.paramMap.get('id');
    console.log(currentPostid);
  }

  convertToMarkdown() {
    var reader = new Parser();
    var writer = new HtmlRenderer();
    var parsedTitle = reader.parse(this.post.title); 
    this.resultTitle = writer.render(parsedTitle); 
    
    var parsedBody= reader.parse(this.post.body);
    this.resultBody = writer.render(parsedBody); 
    
  }

  onEdit() {
    console.log("clicked onEdit");
    this.router.navigate(['edit', this.currentPostid]);
  }
}
