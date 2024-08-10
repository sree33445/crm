package com.crm.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.crm.entity.SuperAdmin;

public interface SuperAdminRepository extends MongoRepository<SuperAdmin, String> {
    Optional<SuperAdmin> findByEmail(String email);
}
