import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators }  from '@angular/forms';

@Component({
    selector: 'contact-form',
    templateUrl: './app/contact-form/contact-form.component.html'
})
export class ContactFormComponent {
    contactForm: FormGroup;
    
    constructor(private fb: FormBuilder) {
        this.createForm();
       
    }

    ngOnInit() {
        this.contactForm.valueChanges.subscribe(value => {
            console.log('************************');
            console.log(value);
            console.log('************************');
        });
    }

    createForm() {
    this.contactForm = this.fb.group({
      name: ['Shan', Validators.required ],
      message: ['', Validators.required],
      details: this.fb.group({
        emailid:['',Validators.required],
        phone:[]
      })

    });
  }
}