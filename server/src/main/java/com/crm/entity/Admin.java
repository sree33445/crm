package com.crm.entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Admin")
public class Admin extends Login_SignUp {

    public Admin(String id, String name, String role, String gender, String email, String password) {
        super(id, name, role, gender,  email, password);
    }
}
