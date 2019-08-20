import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ContactInfo } from 'src/app/Models/contact-info';
import { DummyContactService } from 'src/app/Services/DummyContacts/dummy-contact.service';
import { ContactService } from 'src/app/Services/Contacts/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contactId:string;
  contactDetails:ContactInfo;
  dummyAvatar:string = "https://robohash.org/88.130.49.243.png"
  showEditContact:boolean
  
  constructor(private route:ActivatedRoute,private dummyContact:DummyContactService, private contactService:ContactService) { 

    this.route.paramMap.subscribe((activeRoute)=>{
      this.contactId = activeRoute.get("id")
    }
    )
    //this.contactDetails=this.dummyContact.getContactDetails(this.contactId)
    this.contactDetails = this.contactService.getContactDetails(this.contactId);
  }

  ngOnInit() {
    
  }

  deleteContact(){
    //this.dummyContact.deleteContact(this.contactId)
    this.contactService.deleteContact(this.contactId);
  }

  toggleEdit(){
    if(this.showEditContact===true){
      this.showEditContact=false
    }else{
      this.showEditContact = true
    }
  }


}
