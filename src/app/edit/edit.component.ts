import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [BlogService]
})

export class EditComponent implements OnInit {

  editId = 10;
  editStatus = 'offline';
  editCreationStatus = "No Edit was created";
  editName = '';
  editCreated = false;
  editList = ['edit1', 'edit2', 'edit3'];

  getEditId() {
    return this.editId;
  }

  constructor(private blogService: BlogService) {
    
   }

  ngOnInit() {
  }

  onCreateEdit() {
    this.editCreated = true;
    this.editCreationStatus = this.editName;
    this.editList.push(this.editName);
  }

  onUpdateName(event: any) {
    this.editName = event.target.value;
  }

}
