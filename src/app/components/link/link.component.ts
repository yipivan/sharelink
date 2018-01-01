import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Link } from '../../models/Link';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input('link') link: Link;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
  }

  removeLink(link) {
    this.dataService.removeLink(link);
  }

}
