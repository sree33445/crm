package com.crm.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.crm.entity.Login_SignUp;

public interface LoginSignUpRepository extends MongoRepository<Login_SignUp, String> {
    Optional<Login_SignUp> findByEmail(String email);

    Optional<Login_SignUp> findOneByEmailAndPassword(String email, String password);

    
}

