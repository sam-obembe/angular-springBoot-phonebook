package com.practice.phonebookAPI.dao;

import com.practice.phonebookAPI.model.Contact;

import java.util.List;

public interface DatabaseInterface {
    List<Contact> getContacts();
    int addContact(Contact contact);
    Contact editContact(Contact editedContact);
    int deleteContact(String id);
}
