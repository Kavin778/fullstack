package com.backend.resource_boooking_portal.service;

import com.backend.resource_boooking_portal.dto.BookingRequestDTO;
import com.backend.resource_boooking_portal.model.Bookings;
import com.backend.resource_boooking_portal.model.TimeFrame;
import com.backend.resource_boooking_portal.model.Users;
import com.backend.resource_boooking_portal.model.Venues;
import com.backend.resource_boooking_portal.repository.BookingRepository;
import com.backend.resource_boooking_portal.repository.TimeFrameRepository;
import com.backend.resource_boooking_portal.repository.UserRepository;
import com.backend.resource_boooking_portal.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final VenueRepository venueRepository;
    private final UserRepository userRepository;
    private final TimeFrameRepository timeFrameRepository;
    @Autowired
    public BookingService(BookingRepository bookingRepository,
                          VenueRepository venueRepository,
                          UserRepository userRepository,
                          TimeFrameRepository timeFrameRepository) {
        this.bookingRepository = bookingRepository;
        this.venueRepository = venueRepository;
        this.userRepository = userRepository;
        this.timeFrameRepository = timeFrameRepository;
    }

    public Bookings addBookings(BookingRequestDTO bookingRequestDTO){
        Venues venues = venueRepository.findByName(bookingRequestDTO.getVenueName());
        Optional<Users> users = userRepository.findById(1);
        TimeFrame timeFrame = timeFrameRepository.findByTimeRange(bookingRequestDTO.getTimeFrame());

        if(users.isEmpty())return null;
        boolean isAlreadyBoooked = bookingRepository.existsByVenuesAndTimeFrame(venues,timeFrame);

        if(isAlreadyBoooked)return null;
        Bookings bookings = new Bookings();
        bookings.setUsers(users.get());
        bookings.setVenues(venues);
        bookings.setTimeFrame(timeFrame);
        bookings.setBooked_date(LocalDate.now());
        bookings.setBooked_time(LocalTime.now());
        bookings.setStatus("PENDING");
        bookings.setReason(bookingRequestDTO.getReason());

        return  bookingRepository.save(bookings);
    }
}
