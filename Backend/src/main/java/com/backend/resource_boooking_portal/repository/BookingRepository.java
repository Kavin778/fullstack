package com.backend.resource_boooking_portal.repository;

import com.backend.resource_boooking_portal.entity.Bookings;
import com.backend.resource_boooking_portal.entity.Venues;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Bookings,Integer> {
    List<Bookings> findByVenuesAndStatusNot(Venues venues, Bookings.Status status);
}
