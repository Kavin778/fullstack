package com.backend.resource_boooking_portal.controller;

import com.backend.resource_boooking_portal.dto.BookingRequestDTO;
import com.backend.resource_boooking_portal.dto.UserDTO;
import com.backend.resource_boooking_portal.entity.Admin;
import com.backend.resource_boooking_portal.entity.Bookings;
import com.backend.resource_boooking_portal.entity.Users;
import com.backend.resource_boooking_portal.entity.Venues;
import com.backend.resource_boooking_portal.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/resource")
@CrossOrigin
public class UserController {

    private final UserService userService;

    public UserController(UserService userService){
        this.userService=userService;
    }

    @GetMapping("/users")
    public List<UserDTO> findAll(){

        return userService.findAll();
    }

    @GetMapping("/venues/{id}")
    public ResponseEntity<?> getVenues(@PathVariable int id){
        try {
            Venues theVenues = userService.findById(id);
            return ResponseEntity.ok(theVenues);
        }
        catch (RuntimeException runtimeException){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No venues found");
        }

    }

    @GetMapping("/userprofile")
    public ResponseEntity<?> getUserProfile(){
        try {
            UserDTO userDTO = userService.findByEmail();
            return ResponseEntity.ok(userDTO);
        }
        catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Login to get your profile");
        }
    }

    @PostMapping("/venues")
    public Venues setVenues(@RequestBody Venues venues){
        venues.setId(0);
        return userService.save(venues);
    }

    @PostMapping("/bookings")
    public ResponseEntity<?> addBookings(@RequestBody BookingRequestDTO bookingRequestDTO){
        try{
            Bookings bookings= userService.save(bookingRequestDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(bookings);
        }
        catch (DuplicateFormatFlagsException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Venue Already Booked");
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Users users){
        try {
            String token = userService.verify(users);
            return ResponseEntity.ok(Map.of("token",token));
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login Failed");
        }
    }

    @PostMapping("/addUsers")
    public Users setUsers(@RequestBody Users users){
        users.setId(0);
        Users theUsers = userService.save(users);
        return theUsers;
    }

    @PostMapping("/admin")
    public Admin setAdmin(@RequestBody Admin admin){
        admin.setId(0);
        Admin theAdmin = userService.save(admin);
        return theAdmin;
    }
}
