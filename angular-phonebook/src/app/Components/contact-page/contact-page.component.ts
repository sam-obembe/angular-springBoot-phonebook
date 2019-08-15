import { Component, OnInit } from '@angular/core';
import { DummyContactService } from 'src/app/Services/DummyContacts/dummy-contact.service';
import { ContactInfo } from 'src/app/Models/contact-info';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contacts:ContactInfo[]
  //contactsSub
  dummyAvatar:string = "https://robohash.org/88.130.49.243.png"
  constructor(private dummyContact:DummyContactService) {
    this.contacts = this.dummyContact.getContacts()
    //this.contactsSub = this.dummyContact.contactsChange.subscribe(contacts=>this.contacts=contacts)
   }

  ngOnInit() {
    //this.contacts = this.dummyContact.getContacts()
  }

}
