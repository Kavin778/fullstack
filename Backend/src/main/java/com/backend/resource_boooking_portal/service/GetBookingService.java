package com.backend.resource_boooking_portal.service;
import com.backend.resource_boooking_portal.dto.UserDTO;
import com.backend.resource_boooking_portal.entity.Users;
import com.backend.resource_boooking_portal.entity.Venues;


import java.util.*;
public interface GetBookingService {
    List<UserDTO> findAll();

    Venues findById(int id);


    String verify(Users users);
}
