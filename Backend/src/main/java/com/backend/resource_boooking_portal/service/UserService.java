package com.backend.resource_boooking_portal.service;

import com.backend.resource_boooking_portal.model.Users;
import com.backend.resource_boooking_portal.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
    private final AuthenticationManager authenticationManager ;
    private final JwtService jwtService;
    @Autowired
    public UserService(UserRepository userRepository, AuthenticationManager authenticationManager, JwtService jwtService) {
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    public Users addUsers(Users users){
        users.setPassword(encoder.encode(users.getPassword()));
        return userRepository.save(users);
    }

    public Users getUser(Users users){
        System.out.println(users.getEmail());
        return userRepository.findByEmail(users.getEmail());
    }

    public Users getUserByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public String verify(Users users){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(users.getEmail(),users.getPassword()));
        if(authentication.isAuthenticated()){
            return jwtService.generateToken(users.getEmail());
        }
        return "Failed to Generate token";
    }


}
