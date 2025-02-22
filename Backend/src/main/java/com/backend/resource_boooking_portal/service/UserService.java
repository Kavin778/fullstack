package com.backend.resource_boooking_portal.service;

import com.backend.resource_boooking_portal.dto.UserDTO;
import com.backend.resource_boooking_portal.entity.Admin;
import com.backend.resource_boooking_portal.entity.Users;
import com.backend.resource_boooking_portal.entity.Venues;
import com.backend.resource_boooking_portal.repository.AdminRepository;
import com.backend.resource_boooking_portal.repository.UserRepository;
import com.backend.resource_boooking_portal.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements BookingService,GetBookingService {

    private final UserRepository userRepository;
    private final AdminRepository adminRepository;
    private final VenueRepository venueRepository;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
    private AuthenticationManager authManager;
    private JWTService jwtService;

    @Autowired
    public UserService(UserRepository userRepository,
                       AdminRepository adminRepository,
                       VenueRepository venueRepository,
                       AuthenticationManager authManager,
                       JWTService jwtService){
        this.jwtService=jwtService;
        this.authManager = authManager;
        this.userRepository = userRepository;
        this.adminRepository = adminRepository;
        this.venueRepository = venueRepository;
    }

    @Override
    public Users save(Users users){
        users.setPassword(encoder.encode(users.getPassword()));
         return userRepository.save(users);
    }

    @Override
    public Admin save(Admin admin) {
        admin.setPassword(encoder.encode(admin.getPassword()));
        return adminRepository.save(admin);
    }

    @Override
    public Venues save(Venues venues) {
        return venueRepository.save(venues);
    }


    @Override
    public List<UserDTO> findAll(){
        List<Users> users = userRepository.findAll();
        return users.stream().map(this::convertToDTO).toList();
    }

    @Override
    public Venues findById(int id) {
        Optional<Venues> venues = venueRepository.findById(id);
        Venues theVenue = null;
        if(venues.isPresent()){
            theVenue = venues.get();
        }
        else
            throw new RuntimeException("No venues found");
        return theVenue;
    }

    @Override
    public String verify(Users users) {
        Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken
                (users.getUsername(),users.getPassword()));
        if(authentication.isAuthenticated()){
            return jwtService.generateToken(users.getUsername());
        }
        return "fail";
    }

    private UserDTO convertToDTO(Users users){
        UserDTO userDTO = new UserDTO();
        userDTO.setId(users.getId());
        userDTO.setUsername(users.getUsername());
        userDTO.setDepartment(users.getDepartment());
        userDTO.setEmail(users.getEmail());
        return userDTO;
    }

}
