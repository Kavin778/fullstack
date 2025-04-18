package com.backend.resource_boooking_portal.repository;

import com.backend.resource_boooking_portal.model.Venues;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VenueRepository extends JpaRepository<Venues,Integer> {
    public Venues findByName(String name);
}
