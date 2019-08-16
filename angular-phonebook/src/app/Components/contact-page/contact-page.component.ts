import { Component, OnInit } from '@angular/core';
import { DummyContactService } from 'src/app/Services/DummyContacts/dummy-contact.service';
import { ContactInfo } from 'src/app/Models/contact-info';
import { ContactService } from 'src/app/Services/Contacts/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contacts:ContactInfo[]
  //contactsSub
  dummyAvatar:string = "https://robohash.org/88.130.49.243.png"
  constructor(private dummyContact:DummyContactService,private contactService:ContactService) {
    //this.contacts = this.dummyContact.getContacts()
    this.contactService.getContacts().subscribe((res:ContactInfo[])=>{
      this.contacts=res
      this.contactService.setContacts(res)
    })
    //this.contactsSub = this.dummyContact.contactsChange.subscribe(contacts=>this.contacts=contacts)
   }

  ngOnInit() {
    //this.contacts = this.dummyContact.getContacts()
  }

}
