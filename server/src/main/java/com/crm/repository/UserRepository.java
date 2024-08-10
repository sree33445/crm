package com.crm.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import com.crm.entity.User;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);



    @Query("{'$or': [{'name': {$regex: ?0, $options: 'i'}}, {'email': {$regex: ?0, $options: 'i'}}]}")
    List<User> findByNameOrEmailContainingIgnoreCase(String searchTerm);
}
