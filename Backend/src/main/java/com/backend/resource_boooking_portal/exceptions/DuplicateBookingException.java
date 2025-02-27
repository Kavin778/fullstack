package com.backend.resource_boooking_portal.exceptions;

public class DuplicateBookingException extends RuntimeException{

    public DuplicateBookingException(String message){
        super(message);
    }
}
