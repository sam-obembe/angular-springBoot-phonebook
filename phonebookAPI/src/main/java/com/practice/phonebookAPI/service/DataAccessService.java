package com.practice.phonebookAPI.service;

import com.practice.phonebookAPI.dao.DatabaseInterface;
import com.practice.phonebookAPI.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataAccessService {
    private final DatabaseInterface database;

    @Autowired
    public DataAccessService(@Qualifier("dummyDB") DatabaseInterface dummyDB){
        this.database = dummyDB;
    }

    public List<Contact> getContacts(){
        return database.getContacts();
    }

    public int addContact(Contact contact){
        return database.addContact(contact);
    }

    public Contact editContact(Contact contact){
        return database.editContact(contact);
    }

    public int deleteContact(String id){
        return database.deleteContact(id);
    }
}
