import { Component, ViewChild } from '@angular/core';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { Contacts } from "../contacts";
import { ContactsService } from '../shared/contacts.service';

const contacts:Contacts[] = [
        {"id":1,"name":"abc1","phone":"99999999991","email":"abc1@abc.com"},
        {"id":2,"name":"abc2","phone":"99999999992","email":"abc2@abc.com"},
        {"id":3,"name":"abc3","phone":"99999999993","email":"abc3@abc.com"},
        {"id":4,"name":"abc4","phone":"99999999994","email":"abc4@abc.com"},
        {"id":5,"name":"abc5","phone":"99999999995","email":"abc5@abc.com"},
        {"id":6,"name":"abc6","phone":"99999999996","email":"abc6@abc.com"},
        {"id":7,"name":"abc7","phone":"99999999997","email":"abc7@abc.com"}
];

@Component({
    selector: 'view-contacts',
    templateUrl: './app/view-contacts/view-contacts.component.html',
    styleUrls:['./app/view-contacts/view-contacts.component.css']
})
export class ViewContactsComponent {
    currentContact: Contacts;
    allcontacts: Contacts[] = contacts;
   
    constructor(private contactservice: ContactsService) {
        /*this.contactservice.getUsers().subscribe(data => {
            this.allcontacts = data;
        });*/
    }
    onSelect( people:Contacts ): void {
        this.currentContact = people;
    }

}