import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from "@angular/router";
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactDetailsComponent } from './view-contacts/contact-details/contact-details.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const appRoutes: Routes = [
  { path: 'view', component: ViewContactsComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: '',   redirectTo: '/view', pathMatch: 'full' }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes),FormsModule, ReactiveFormsModule ],

  declarations: [ 
                  AppComponent,
                  HeaderComponent,
                  FooterComponent,
                  ViewContactsComponent,
                  ContactDetailsComponent,
                  AddContactComponent,
                  ContactFormComponent
                ],

  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
