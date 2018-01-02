import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LinkComponent } from './components/link/link.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { AddLinkComponent } from './components/add-link/add-link.component';
import { SearchComponent } from './components/search/search.component';


import {DataService } from './services/data.service';
import { FilterPipe } from './filters/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LinkComponent,
    NavbarComponent,
    LinkListComponent,
    AddLinkComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TagInputModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
