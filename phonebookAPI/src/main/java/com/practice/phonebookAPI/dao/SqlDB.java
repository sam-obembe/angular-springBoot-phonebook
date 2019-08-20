package com.practice.phonebookAPI.dao;

import com.practice.phonebookAPI.model.Contact;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;


@Repository("sqlDB")
public class SqlDB implements DatabaseInterface{
    private SqlInterface sql;
    public SqlDB(SqlInterface postgres){
        this.sql=postgres;
    }

    @Override
    public List<Contact> getContacts() {
        List foundContacts = new ArrayList<Contact>();
        Iterable contacts = this.sql.findAll();
        contacts.forEach(person->foundContacts.add(person));
        return foundContacts;
    }

    @Override
    public int addContact(Contact contact) {
        this.sql.save(contact);
        return 0;
    }

    @Override
    public Contact editContact(Contact editedContact) {
        return null;
    }

    @Override
    public int deleteContact(String id) {
        this.sql.deleteById(id);
        return 1;
    }

}
