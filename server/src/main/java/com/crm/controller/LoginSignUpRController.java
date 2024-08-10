package com.crm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.crm.entity.Login_SignUp;
import com.crm.response.LoginSignUpResponse;
import com.crm.service.Login_SignUpService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/auth")
public class LoginSignUpRController {

    @Autowired
    private final Login_SignUpService login_SignUpService;

    public LoginSignUpRController(Login_SignUpService login_SignUpService) {
        this.login_SignUpService = login_SignUpService;
    }

    @PostMapping("/register")
    public ResponseEntity<LoginSignUpResponse> addUser(@RequestBody Login_SignUp login_SignUp) {
        LoginSignUpResponse result = login_SignUpService.addUser(login_SignUp);
        if (result.isSuccess()) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginSignUpResponse> loginUser(@RequestBody Login_SignUp login_SignUp) {
        LoginSignUpResponse loginResponse = login_SignUpService.loginUser(login_SignUp);
        if (loginResponse.isSuccess()) {
            return ResponseEntity.ok(loginResponse);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(loginResponse);
        }
    }
}
