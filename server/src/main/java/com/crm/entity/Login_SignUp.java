package com.crm.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotEmpty;

@Document(collection = "Login_SignUp")
public class Login_SignUp {
    @Id
    private String id;
    @NotEmpty
    private String name;
    @NotEmpty
    private String role;
    @NotEmpty
    private String gender;
    @NotEmpty
    private String email;
    @NotEmpty
    private String password;

    // Constructors, getters, and setters

    public Login_SignUp(String id, @NotEmpty String name, @NotEmpty String role, @NotEmpty String gender,
             @NotEmpty String email, @NotEmpty String password) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.gender = gender;
        this.email = email;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

 

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // @Override
    // public String toString() {
    //     return "User [id=" + id + ", name=" + name + ", role=" + role + ", gender=" + gender + ", nationality="
    //             + nationality + ", email=" + email + ", password=" + password + "]";
    // }
}
