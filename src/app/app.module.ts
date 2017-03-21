import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from "@angular/router"

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactDetailsComponent } from './view-contacts/contact-details/contact-details.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const appRoutes: Routes = [
  { path: 'view', component: ViewContactsComponent },
  { path: 'add', component: AddContactComponent },
  { path: '',   redirectTo: '/view', pathMatch: 'full' }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],

  declarations: [ 
                  AppComponent,
                  HeaderComponent,
                  FooterComponent,
                  ViewContactsComponent,
                  ContactDetailsComponent,
                  AddContactComponent
                ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
