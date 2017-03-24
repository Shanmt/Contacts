import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ContactFormComponent } from './contact-form.component';

@NgModule({

    imports: [ReactiveFormsModule,BrowserModule],
    exports: [ ContactFormComponent ],
    declarations: [ ContactFormComponent ],
    providers: []

})
export class ContactFormModule { 
    

}  
