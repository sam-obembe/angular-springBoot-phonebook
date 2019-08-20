import { Injectable } from '@angular/core';
import { ContactServiceInterface } from 'src/app/Models/contact-service-interface';
import {HttpClient} from '@angular/common/http'
import { ContactInfo } from 'src/app/Models/contact-info';
@Injectable({
  providedIn: 'root'
})
export class ContactService implements ContactServiceInterface {
  contacts:ContactInfo[];
  apiEndPoint:string = `http://localhost:8080/contacts`;

  constructor(private http:HttpClient) {
    this.contacts = []
   }

  getContacts() {
    return this.http.get(this.apiEndPoint)
  }

  setContacts(contacts:ContactInfo[]){
    this.contacts=contacts
  }

  getContactDetails(id: string):ContactInfo {
    let contact = this.contacts.find(el=>el.id===id)
    return contact
  }
  addContact(details:ContactInfo) {
    let newContact = details
    newContact.id = Math.floor(Math.random()*+newContact.phoneNumber).toString()
    return this.http.post(this.apiEndPoint,newContact).subscribe(res=>{
      if(res===1){
        console.log("success")
        this.contacts.push(newContact)
      }
    })
  }
  deleteContact(id: string) {
    return this.http.delete(`${this.apiEndPoint}/${id}`).subscribe(res=>{
      if(res===1){
        console.log("success")
        this.getContacts().subscribe((res:ContactInfo[])=>{
          this.contacts = res
        })
      }
    })
  }
  editContact(contact:ContactInfo) {
    return this.http.put(this.apiEndPoint,contact).subscribe(res=>{
      if(res==1){
        console.log("success")
        this.getContacts().subscribe((res:ContactInfo[])=>{
          this.contacts=res
        })
      }
    })
  }

 
}
