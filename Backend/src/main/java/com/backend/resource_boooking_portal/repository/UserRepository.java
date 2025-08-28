package com.backend.resource_boooking_portal.repository;

import com.backend.resource_boooking_portal.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users,Integer> {
   Users findByEmail(String email);
}
