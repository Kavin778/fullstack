package com.backend.resource_boooking_portal.service;

import com.backend.resource_boooking_portal.dto.BookingRequestDTO;
import com.backend.resource_boooking_portal.dto.UserDTO;
import com.backend.resource_boooking_portal.entity.Admin;
import com.backend.resource_boooking_portal.entity.Bookings;
import com.backend.resource_boooking_portal.entity.Users;
import com.backend.resource_boooking_portal.entity.Venues;
import com.backend.resource_boooking_portal.exceptions.DuplicateBookingException;
import com.backend.resource_boooking_portal.repository.AdminRepository;
import com.backend.resource_boooking_portal.repository.BookingRepository;
import com.backend.resource_boooking_portal.repository.UserRepository;
import com.backend.resource_boooking_portal.repository.VenueRepository;
import com.backend.resource_boooking_portal.security.MyUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDateTime;
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
    private final BookingRepository bookingRepository;

    @Autowired
    public UserService(UserRepository userRepository,
                       AdminRepository adminRepository,
                       VenueRepository venueRepository,
                       AuthenticationManager authManager,
                       JWTService jwtService,
                       BookingRepository bookingRepository){
        this.jwtService=jwtService;
        this.bookingRepository=bookingRepository;
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
    public Bookings save(BookingRequestDTO bookingRequestDTO) {
        Bookings bookings = new Bookings();

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.getPrincipal() instanceof MyUserDetails) {
            MyUserDetails userDetails = (MyUserDetails) authentication.getPrincipal();
            String email = userDetails.getUsername();
            Users users = userRepository.findByEmail(email);
            bookings.setUsers(users);
        } else {
            System.out.println("User is not authenticated!");
        }
        Venues venues = venueRepository.findByName(bookingRequestDTO.getVenueName());
        List<Bookings> existingBookings = bookingRepository.findByVenuesAndStatusNot(venues, Bookings.Status.REJECTED);

        boolean isOverlapping = existingBookings.stream()
                .anyMatch(existing ->
                        (       (bookingRequestDTO.getVenueName().equals(existing.getVenues().getName()))&&
                                bookingRequestDTO.getFromDate().before(existing.getToDate()) ||
                                bookingRequestDTO.getFromDate().equals(existing.getToDate())) &&
                                (bookingRequestDTO.getToDate().after(existing.getFromDate()) ||
                                        bookingRequestDTO.getToDate().equals(existing.getFromDate())) &&
                                (bookingRequestDTO.getFromTime().toLocalTime().isBefore(existing.getToTime().toLocalTime())) &&
                                        bookingRequestDTO.getToTime().toLocalTime().isAfter(existing.getFromTime().toLocalTime())
                );

        if(isOverlapping){
            throw new DuplicateBookingException("Venue is already Booked");
        }
            bookings.setVenues(venues);
            bookings.setFromDate(bookingRequestDTO.getFromDate());
            bookings.setToDate(bookingRequestDTO.getToDate());
            bookings.setFromTime(bookingRequestDTO.getFromTime());
            bookings.setToTime(bookingRequestDTO.getToTime());
            bookings.setReason(bookingRequestDTO.getReason());
            bookings.setStatus(Bookings.Status.PENDING);
        return bookingRepository.save(bookings);
    }
    @Override
    public UserDTO findByEmail() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.getPrincipal() instanceof MyUserDetails) {
            MyUserDetails userDetails = (MyUserDetails) authentication.getPrincipal();
            String email = userDetails.getUsername();
            Users users = userRepository.findByEmail(email);
            return new UserDTO(users);
        } else {
            return null;
        }
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
                (users.getEmail(),users.getPassword()));
        if(authentication.isAuthenticated()){
            return jwtService.generateToken(users.getEmail());
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
