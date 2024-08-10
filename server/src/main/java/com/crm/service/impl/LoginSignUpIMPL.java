
package com.crm.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.crm.entity.Admin;
import com.crm.entity.Login_SignUp;
import com.crm.entity.SuperAdmin;
import com.crm.entity.User;
import com.crm.repository.AdminRepository;
import com.crm.repository.SuperAdminRepository;
import com.crm.repository.UserRepository;
import com.crm.response.LoginSignUpResponse;
import com.crm.service.Login_SignUpService;

@Service
public class LoginSignUpIMPL implements Login_SignUpService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private SuperAdminRepository superAdminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public LoginSignUpResponse addUser(Login_SignUp login_SignUp) {
        String email = login_SignUp.getEmail();

        // Check if email already exists
        if (userRepository.findByEmail(email).isPresent() ||
                adminRepository.findByEmail(email).isPresent() ||
                superAdminRepository.findByEmail(email).isPresent()) {
            return new LoginSignUpResponse("Email already exists", false, 400);
        }

        // Create the appropriate user entity based on role
        switch (login_SignUp.getRole().toUpperCase()) {
            case "ADMIN":
                Admin admin = new Admin(login_SignUp.getId(), login_SignUp.getName(), login_SignUp.getRole(),
                        login_SignUp.getGender(), login_SignUp.getEmail(),
                        passwordEncoder.encode(login_SignUp.getPassword()));
                adminRepository.save(admin);
                break;
            case "SUPERADMIN":
                SuperAdmin superAdmin = new SuperAdmin(login_SignUp.getId(), login_SignUp.getName(),
                        login_SignUp.getRole(),
                        login_SignUp.getGender(), login_SignUp.getEmail(),
                        passwordEncoder.encode(login_SignUp.getPassword()));
                superAdminRepository.save(superAdmin);
                break;
            case "USER":
                User user = new User(login_SignUp.getId(), login_SignUp.getName(), login_SignUp.getRole(),
                        login_SignUp.getGender(), login_SignUp.getEmail(),
                        passwordEncoder.encode(login_SignUp.getPassword()));
                userRepository.save(user);
                break;
            default:
                return new LoginSignUpResponse("Invalid role", false, 400);
        }

        return new LoginSignUpResponse("Registration Successful", true, 201);
    }

    @Override
    public LoginSignUpResponse loginUser(Login_SignUp login_SignUp) {
        String email = login_SignUp.getEmail();
        String password = login_SignUp.getPassword();

        // Check in all repositories
        Optional<User> optionalUser = userRepository.findByEmail(email);
        Optional<Admin> optionalAdmin = adminRepository.findByEmail(email);
        Optional<SuperAdmin> optionalSuperAdmin = superAdminRepository.findByEmail(email);

        if (optionalUser.isPresent()) {
            return checkPassword(optionalUser.get(), password);
        } else if (optionalAdmin.isPresent()) {
            return checkPassword(optionalAdmin.get(), password);
        } else if (optionalSuperAdmin.isPresent()) {
            return checkPassword(optionalSuperAdmin.get(), password);
        } else {
            return new LoginSignUpResponse("Email does not exist", false, 404);
        }
    }

    private LoginSignUpResponse checkPassword(Login_SignUp registration, String password) {
        String encodedPassword = registration.getPassword();
        boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
        if (isPwdRight) {
            return new LoginSignUpResponse("Login Success", true, 200, registration.getRole());
        } else {
            return new LoginSignUpResponse("Password does not match", false, 401);
        }
    }
}
