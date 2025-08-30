package com.backend.resource_boooking_portal.controller;

import com.backend.resource_boooking_portal.dto.BookingRequestDTO;
import com.backend.resource_boooking_portal.model.Bookings;
import com.backend.resource_boooking_portal.model.Users;
import com.backend.resource_boooking_portal.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
@CrossOrigin
public class BookingController {

    private final BookingService bookingService;
    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }


    @PostMapping("/addBooking")
    public ResponseEntity<?> addBooking(@RequestBody BookingRequestDTO bookingRequestDTO){
        Bookings bookings = bookingService.addBookings(bookingRequestDTO);
        if(bookings == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Already booked");

        return ResponseEntity.status(HttpStatus.CREATED).body("Booked " + bookings.getId()+" venue successfully");
    }

    @GetMapping("/getApprovedBookings")
    public ResponseEntity<?> getApprovedBookings(@RequestParam("email") String email){
        List<Bookings> bookings = bookingService.getApprovedBookings(email);
        if(bookings == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Not booked");
        return ResponseEntity.status(HttpStatus.OK).body(bookings);
    }

    @GetMapping("/getPendingBookings")
    public ResponseEntity<?> getPendingBookings(@RequestParam("email") String email){
        List<Bookings> bookings = bookingService.getPendingBookings(email);
        if(bookings == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Not booked");
        return ResponseEntity.status(HttpStatus.OK).body(bookings);
    }

    @GetMapping("/getAllBookings")
    public ResponseEntity<?> getAllBookings(@RequestParam("email") String email){
        List<Bookings> bookings = bookingService.getAllBookings(email);
        if(bookings == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Not booked");
        return ResponseEntity.status(HttpStatus.OK).body(bookings);
    }


}
