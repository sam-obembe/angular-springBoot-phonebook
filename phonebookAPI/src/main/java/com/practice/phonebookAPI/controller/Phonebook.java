package com.practice.phonebookAPI.controller;

import com.practice.phonebookAPI.model.Contact;
import com.practice.phonebookAPI.service.DataAccessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("contacts")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class Phonebook {
    private final DataAccessService dataAccess;

    @Autowired
    public Phonebook(DataAccessService myDataAccess){
        this.dataAccess = myDataAccess;
    }

    @GetMapping
    List<Contact> getContacts(){
        return this.dataAccess.getContacts();
    }

    @PostMapping
    public int addContact(@RequestBody Contact contact){
        return dataAccess.addContact(contact);
    }

    @PutMapping
    public Contact editContact(@RequestBody Contact contact){
        return dataAccess.editContact(contact);
    }

    //@CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(path="{id}")
    public int deleteContact(@PathVariable("id") String id){
        System.out.println(id);
        return dataAccess.deleteContact(id);
    }
}
