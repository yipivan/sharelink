import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Link } from '../../models/Link';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

  links: Link[];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.links = this.dataService.getLinks();
  }

  addLink(link: Link) {
    this.dataService.addLink(link);
  }
}
