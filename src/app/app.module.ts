import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactDetailsComponent } from './view-contacts/contact-details/contact-details.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactsService } from './shared/contacts.service';
import { ContactFormModule } from './contact-form/contact-form.module';
import { RoutingModule } from './routing.module';
import { DemoLinkComponent } from './view-contacts/demo-link/demo-link.component';
import { DemoLink2Component } from './view-contacts/demo-link2/demo-link2.component';


@NgModule({
  imports:      [ 
                  BrowserModule,
                  FormsModule,
                  ReactiveFormsModule,
                  HttpModule,
                  ContactFormModule,
                  RoutingModule
                ],

  declarations: [ 
                  AppComponent,
                  HeaderComponent,
                  FooterComponent,
                  ViewContactsComponent,
                  ContactDetailsComponent,
                  AddContactComponent,
                  DemoLinkComponent,
                  DemoLink2Component
                  
                ],

  bootstrap:    [ AppComponent ],
  providers: [ContactsService]
})
export class AppModule { }
