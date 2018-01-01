import { Injectable } from '@angular/core';
import { Link } from '../models/Link';

@Injectable()
export class DataService {
  links: Link[];
  constructor() { }

  getLinks() {
    if(localStorage.getItem('links') === null){
      this.links = [];
    } else {
      this.links = JSON.parse(localStorage.getItem('links'));
    }
    return this.links;
  }

  addLink(link:Link){
    // Init local var
    let links: Link[];

    if(localStorage.getItem('links') === null){
      links = [];
      // Push new question
      links.unshift(link);
      // Set new array to LS
      localStorage.setItem('links', JSON.stringify(links));
    } else {
      links = JSON.parse(localStorage.getItem('links'));
      // Add new question
      links.unshift(link);
      // Re set LS
      localStorage.setItem('links', JSON.stringify(links));
    }
  }

  // Remove Question from LS
  removeLink(link:Link){
    for(let i = 0;i < this.links.length;i++){
      if(link == this.links[i]){
        this.links.splice(i, 1);
        localStorage.setItem('links', JSON.stringify(this.links));
      }
    }
  }
}
