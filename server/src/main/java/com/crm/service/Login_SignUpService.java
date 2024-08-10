package com.crm.service;

import com.crm.entity.Login_SignUp;
import com.crm.response.LoginSignUpResponse;

public interface Login_SignUpService {
    LoginSignUpResponse addUser(Login_SignUp login_SignUp);

    LoginSignUpResponse loginUser(Login_SignUp login_SignUp);

}