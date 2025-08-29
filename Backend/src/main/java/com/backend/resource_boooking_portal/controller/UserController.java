package com.backend.resource_boooking_portal.controller;


import com.backend.resource_boooking_portal.model.Users;
import com.backend.resource_boooking_portal.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    private final UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/addUsers")
    public ResponseEntity<?> addUsers(@RequestBody @Valid Users users){
        Users check = userService.getUser(users);
        if(check ==null)
        {
            Users users1 = userService.addUsers(users);
            return ResponseEntity.status(HttpStatus.CREATED).body("User with" + users1.getId() + "is created");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User with "+ users.getEmail()+" is already there");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Users users){
        String token = userService.verify(users);

        if(token.equals("Failed to Generate token")){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Failed to Login");
        }

        return ResponseEntity.status(HttpStatus.OK).body(Map.of("token",token));
    }

    @GetMapping("/userProfile")
    public ResponseEntity<?> getUserProfile(@RequestParam("email") String email){
        Users users = userService.getUserByEmail(email);
        return ResponseEntity.status(HttpStatus.OK).body(users);
    }
}
