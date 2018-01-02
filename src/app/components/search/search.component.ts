import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  searchTerm:string = "";

  constructor() { }

  ngOnInit() {
  }

  getSearch(){
    console.log(this.searchTerm);
    this.search.emit(this.searchTerm);
  }

}
