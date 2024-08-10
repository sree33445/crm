package com.crm.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.crm.entity.User;
import com.crm.repository.UserRepository;
import com.crm.response.AdminAddUserResponse;
import com.crm.service.AdminAddUserService;

@Service
public class AdminAddUserServiceImpl implements AdminAddUserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public AdminAddUserResponse<List<User>> searchUsers(String searchTerm) {
        List<User> users = userRepository.findByNameOrEmailContainingIgnoreCase(searchTerm);
        if (users.isEmpty()) {
            return new AdminAddUserResponse<>("No users found", false, 404);
        }
        return new AdminAddUserResponse<>("Users found", true, 200, users);
    }

}
