import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactInfo } from 'src/app/Models/contact-info';
import {FormGroup,FormControl} from '@angular/forms'
import { ContactService } from 'src/app/Services/Contacts/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  @Input() editState:boolean
  @Output() cancel = new EventEmitter();
  @Input() defaultDetails:ContactInfo;
  @Input() id:string;
  
  editContactForm:FormGroup
  constructor(private contactService:ContactService) { 
    
  }

  ngOnInit() {
    console.log(this.defaultDetails)
    this.editContactForm = new FormGroup({
      firstName: new FormControl(this.defaultDetails.firstName),
      lastName: new FormControl(this.defaultDetails.lastName),
      email: new FormControl(this.defaultDetails.email),
      phoneNumber: new FormControl(this.defaultDetails.phoneNumber),
      avatar:new FormControl('')
    })
  }

  cancelEdit(){
    this.cancel.emit()
  }

  submitEdit(){
    console.log(this.editContactForm.value)
    let newContactDetails = {...this.editContactForm.value,id:this.id}
    //newContactDetails.id= this.id
    console.log(newContactDetails)
    this.contactService.editContact(newContactDetails)
    this.cancelEdit()
  }
}
