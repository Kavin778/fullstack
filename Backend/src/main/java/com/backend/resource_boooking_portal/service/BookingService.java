package com.backend.resource_boooking_portal.service;
import com.backend.resource_boooking_portal.dto.BookingRequestDTO;
import com.backend.resource_boooking_portal.entity.Admin;
import com.backend.resource_boooking_portal.entity.Bookings;
import com.backend.resource_boooking_portal.entity.Users;
import com.backend.resource_boooking_portal.entity.Venues;

import java.util.*;
public interface BookingService {
    Users save(Users users);

    Admin save(Admin admin);

    Venues save(Venues venues);

    Bookings save(BookingRequestDTO bookingRequestDTO);
}
