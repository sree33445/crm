package com.crm.entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "SuperAdmin")
public class SuperAdmin extends Login_SignUp {

    public SuperAdmin(String id, String name, String role, String gender,  String email, String password) {
        super(id, name, role, gender, email, password);
    }
}
