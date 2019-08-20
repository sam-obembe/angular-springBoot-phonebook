package com.practice.phonebookAPI.dao;

import com.practice.phonebookAPI.model.Contact;
import org.springframework.data.repository.CrudRepository;

public interface SqlInterface extends CrudRepository<Contact,String> {
}
