package com.backend.resource_boooking_portal.repository;

import com.backend.resource_boooking_portal.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
    Users findByEmail(String username);
}
