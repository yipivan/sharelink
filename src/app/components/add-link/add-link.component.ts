import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Link } from '../../models/Link';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  @Output() linkAdded = new EventEmitter<Link>();
  
  hide: boolean = true;
  url: string;
  tags: string;

  constructor() { }

  ngOnInit() {
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  addLink() {
    this.linkAdded.emit({url:this.url, tags:this.tags});
  }

}
