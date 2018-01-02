import { Injectable, Input } from '@angular/core';
import { Link } from '../models/Link';

@Injectable()
export class DataService {
  links: Link[];
  constructor() { }

  getLinks() {
    if (localStorage.getItem('links') === null) {
      this.links = [];
    } else {
      this.links = JSON.parse(localStorage.getItem('links'));
    }
    return this.links;
  }

  addLink(link: Link) {
    this.links.unshift(link);
    console.log(this.links);
    // Init local var
    let links;

    if (localStorage.getItem('links') === null) {
      links = [];
      // Push new link
      links.unshift(link);
      // Set new array to LS
      localStorage.setItem('links', JSON.stringify(links));
    } else {
      links = JSON.parse(localStorage.getItem('links'));
      // Add new link
      links.unshift(link);
      // Re set LS
      localStorage.setItem('links', JSON.stringify(links));
    }
  }

  // Remove link from LS
  removeLink(link: Link) {
    for (let i = 0; i < this.links.length; i++) {
      if (link == this.links[i]) {
        this.links.splice(i, 1);
        localStorage.setItem('links', JSON.stringify(this.links));
      }
    }
  }
}
