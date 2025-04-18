package com.backend.resource_boooking_portal.service;

import com.backend.resource_boooking_portal.model.Venues;
import com.backend.resource_boooking_portal.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VenueService {

    private final VenueRepository venueRepository;
    @Autowired
    public VenueService(VenueRepository venueRepository) {
        this.venueRepository = venueRepository;
    }

    public Venues addVenues(Venues venues) {
        return venueRepository.save(venues);
    }

}
