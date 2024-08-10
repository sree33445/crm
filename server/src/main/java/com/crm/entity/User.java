package com.crm.entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User")
public class User extends Login_SignUp {

    public User(String id, String name, String role, String gender,  String email, String password) {
        super(id, name, role, gender, email, password);
    }
}
