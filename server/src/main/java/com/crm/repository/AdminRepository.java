package com.crm.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.crm.entity.Admin;

public interface AdminRepository extends MongoRepository<Admin, String> {
    Optional<Admin> findByEmail(String email);
}
