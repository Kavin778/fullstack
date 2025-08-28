package com.backend.resource_boooking_portal.dto;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.w3c.dom.Text;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingRequestDTO {
    private String venueName;
    private String timeFrame;
    private String reason;
}
