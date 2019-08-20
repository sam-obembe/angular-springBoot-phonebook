import { ContactInfo } from './contact-info';

export interface ContactServiceInterface {
  contacts:ContactInfo[];
  getContacts()
  getContactDetails(id:string)
  addContact(details:ContactInfo)
  deleteContact(id:string)
  editContact(contact:ContactInfo)
}
