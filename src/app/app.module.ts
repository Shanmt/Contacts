import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactDetailsComponent } from './view-contacts/contact-details/contact-details.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';

@NgModule({
  imports:      [ BrowserModule ],

  declarations: [ 
                  AppComponent,
                  HeaderComponent,
                  FooterComponent,
                  ViewContactsComponent,
                  ContactDetailsComponent
                ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
