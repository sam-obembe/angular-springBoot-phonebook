import { Injectable } from '@angular/core';
import { ContactServiceInterface } from 'src/app/Models/contact-service-interface';
import { ContactInfo } from 'src/app/Models/contact-info';
//import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DummyContactService implements ContactServiceInterface {
  
 
  contacts:ContactInfo[];
  //contactsChange: Subject<any> = new Subject<any>()
 
  
  constructor() { 
    this.contacts = []
  }

  getContacts():ContactInfo[] {
    //this.contactsChange.next(this.contacts)
    return this.contacts;
  }

  getContactDetails(id:string):ContactInfo {
    let contact = this.contacts.find(el=>el.id===id)
    return contact
  }

  addContact(details:ContactInfo):void{
    let newContact = details
    newContact.id = Math.floor(Math.random()*+newContact.phoneNumber).toString()
    this.contacts.push(newContact);
    //this.contactsChange.next(this.contacts)
    console.log(this.contacts)
  
  }
  deleteContact(id:string):void {
    let location = this.contacts.findIndex(contact=>contact.id===id)
    let arrayCopy = [...this.contacts]
    arrayCopy.splice(location,1)
    console.log(arrayCopy)
    this.contacts = arrayCopy
    //this.contactsChange.next(this.contacts)
  }
  editContact():void {
    throw new Error("Method not implemented.");
  }
  
}
