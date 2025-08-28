package com.backend.resource_boooking_portal.repository;

import com.backend.resource_boooking_portal.model.Bookings;
import com.backend.resource_boooking_portal.model.TimeFrame;
import com.backend.resource_boooking_portal.model.Venues;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Bookings,Integer> {
    public boolean existsByVenuesAndTimeFrame(Venues venues, TimeFrame timeFrame);
}
