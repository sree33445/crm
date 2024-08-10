package com.crm.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.crm.entity.User;
import com.crm.response.AdminAddUserResponse;
import com.crm.service.AdminAddUserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/auth")
public class AdminAddUserController {

    @Autowired
    private AdminAddUserService userService;

    @GetMapping("/search")
    public ResponseEntity<AdminAddUserResponse<List<User>>> searchUsers(@RequestParam String query) {
        AdminAddUserResponse<List<User>> response = userService.searchUsers(query);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    // @GetMapping("/search/prefix")
    // public ResponseEntity<AdminAddUserResponse<List<User>>> searchUsersByPrefix(@RequestParam String prefix) {
    //     AdminAddUserResponse<List<User>> response = userService.searchUsersByPrefix(prefix);
    //     return ResponseEntity.status(response.getStatusCode()).body(response);
    // }
}
