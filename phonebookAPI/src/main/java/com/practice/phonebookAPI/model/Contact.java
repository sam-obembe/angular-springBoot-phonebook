package com.practice.phonebookAPI.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Contact {
    private String id;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;
    private String avatar;

    public Contact(@JsonProperty("id") String id,
                   @JsonProperty("firstName") String firstName, @JsonProperty("lastName") String lastName,
                   @JsonProperty("phoneNumber")String phoneNumber, @JsonProperty("email") String email,
                   @JsonProperty("avatar")String avatar){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.avatar = avatar;
        this.id = id;

    }

    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
