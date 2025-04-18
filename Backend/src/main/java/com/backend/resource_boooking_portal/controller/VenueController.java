package com.backend.resource_boooking_portal.controller;

import com.backend.resource_boooking_portal.model.TimeFrame;
import com.backend.resource_boooking_portal.model.Venues;
import com.backend.resource_boooking_portal.service.TimeService;
import com.backend.resource_boooking_portal.service.VenueService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/venues")
@CrossOrigin
public class VenueController {

    private final VenueService venueService;
    private final TimeService timeService;
    @Autowired
    public VenueController(VenueService venueService, TimeService timeService) {
        this.venueService = venueService;
        this.timeService = timeService;
    }


    @PostMapping
    public ResponseEntity<?> addVenues(@RequestBody @Valid Venues venues){
        venueService.addVenues(venues);
        return ResponseEntity.status(HttpStatus.CREATED).body("Venue with id " + venues.getId()+ " is created");
    }

    @GetMapping
    public List<TimeFrame> getTimes(){
        return timeService.getTimeFrames();
    }
}
