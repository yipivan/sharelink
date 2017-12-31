import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LinkComponent } from './components/link/link.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { AddLinkComponent } from './components/add-link/add-link.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LinkComponent,
    NavbarComponent,
    LinkListComponent,
    AddLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
