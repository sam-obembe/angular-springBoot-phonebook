import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {ContactInfo} from '../../Models/contact-info'
import {DummyContactService} from '../../Services/DummyContacts/dummy-contact.service'

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactForm:FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    avatar:new FormControl('')
  })
  contactDetails:ContactInfo

  constructor(private contactService:DummyContactService) { 
    
  }

  ngOnInit() {
    
  }

  submitForm(){
    this.contactService.addContact(this.contactForm.value)
  }

}
