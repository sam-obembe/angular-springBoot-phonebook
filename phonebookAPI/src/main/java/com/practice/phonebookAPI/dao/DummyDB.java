package com.practice.phonebookAPI.dao;

import com.practice.phonebookAPI.model.Contact;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository("dummyDB")
public class DummyDB implements DatabaseInterface {
    private List<Contact> contacts = new ArrayList<>();
    @Override
    public List<Contact> getContacts() {
        return contacts;
    }

    @Override
    public int addContact(Contact contact) {
        contacts.add(contact);
        return 1;
    }

    @Override
    public Contact editContact(Contact editedContact) {
        contacts.removeIf(e -> e.getId().equals(editedContact.getId()));
        contacts.add(editedContact);
        return editedContact;
    }

    @Override
    public int deleteContact(String id) {
        contacts.removeIf(e->e.getId().equals(id));
        return 1;
    }
}
