import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Link } from '../../models/Link';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  @Output() linkAdded = new EventEmitter<Link>();
  
  hide: boolean = true;
  tags: string[];

  constructor() { }

  ngOnInit() {
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  onSubmit(addLinkForm: any) {
    if(addLinkForm.invalid){
      // Forbid the form from submitting if it is invalid.
      return;
    }
    this.linkAdded.emit({
      title: addLinkForm.value.title, 
      url: addLinkForm.value.url, 
      tags: addLinkForm.value.tags == ""? this.tags: addLinkForm.value.tags})
  }
}
