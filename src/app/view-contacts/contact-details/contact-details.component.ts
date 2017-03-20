import { Component, Input } from '@angular/core';

import { Contacts } from "../../contacts";

@Component({
    selector: 'contact-details',
    template: `<div *ngIf="contacts">
                <h2>{{contacts.name}} details!</h2>
                    <div><label>Contact Name:<b>{{contacts.name}}</b></label></div> 
                    <div><label>Phone Number:<b>{{contacts.phone}}</b></label></div> 
                    <div><label>Email Address: <b>{{contacts.email}}</b></label></div> 
                </div>
    `
})
export class ContactDetailsComponent {
    @Input()

    contacts: Contacts;
    constructor() {
        console.log('asdasdsadasd');

     }

}