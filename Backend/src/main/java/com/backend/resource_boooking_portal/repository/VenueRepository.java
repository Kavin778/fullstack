package com.backend.resource_boooking_portal.repository;

import com.backend.resource_boooking_portal.entity.Venues;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VenueRepository extends JpaRepository<Venues,Integer> {
}
