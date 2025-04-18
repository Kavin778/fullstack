package com.backend.resource_boooking_portal.repository;

import com.backend.resource_boooking_portal.model.TimeFrame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeFrameRepository extends JpaRepository<TimeFrame,Integer> {
    public TimeFrame findByTimeRange(String timeframe);
}
