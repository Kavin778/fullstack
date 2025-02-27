package com.backend.resource_boooking_portal.dto;

import lombok.Data;

import java.sql.Date;
import java.sql.Time;

@Data
public class BookingRequestDTO {
    private String venueName;
    private Date fromDate;
    private Date toDate;
    private Time fromTime;
    private Time toTime;
    private String reason;
}
