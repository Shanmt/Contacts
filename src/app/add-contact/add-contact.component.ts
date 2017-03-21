import { Component } from '@angular/core';

import { Contacts } from '../contacts';

@Component({
    selector: 'add-contacts',
    templateUrl: './app/add-contact/add-contact.component.html'
})
export class AddContactComponent {
    model = new Contacts(1,'Shan','99999999999','shanmt@live.com');
    constructor() { 
       

    }

}