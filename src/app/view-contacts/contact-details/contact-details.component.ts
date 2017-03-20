import { Component, Input } from '@angular/core';

import { Contacts } from "../../contacts";

@Component({
    selector: 'contact-details',
    template: `<div *ngIf="contacts">
                <h2>{{contacts.name}} details!</h2>
                <div><label>id: </label>{{contacts.id}}</div>
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