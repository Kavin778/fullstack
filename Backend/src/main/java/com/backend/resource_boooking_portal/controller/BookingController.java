package com.backend.resource_boooking_portal.controller;

import com.backend.resource_boooking_portal.dto.BookingRequestDTO;
import com.backend.resource_boooking_portal.model.Bookings;
import com.backend.resource_boooking_portal.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/booking")
@CrossOrigin
public class BookingController {

    private final BookingService bookingService;
    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }


    @PostMapping
    public ResponseEntity<?> addBooking(@RequestBody BookingRequestDTO bookingRequestDTO){
        Bookings bookings = bookingService.addBookings(bookingRequestDTO);
        if(bookings == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error occurred while saving");

        return ResponseEntity.status(HttpStatus.CREATED).body("Booked " + bookings.getId()+" venue successfully");
    }
}
