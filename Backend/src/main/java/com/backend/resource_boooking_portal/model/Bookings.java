package com.backend.resource_boooking_portal.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.w3c.dom.Text;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Entity
@Table(name = "bookings")
public class Bookings {

    @TableGenerator(
            name = "yourTableGenerator",
    allocationSize = 1,
    initialValue = 0)
    @Id
    @GeneratedValue(
            strategy=GenerationType.TABLE,
            generator="yourTableGenerator")
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "venue_id")
    @NotNull(message = "select the venues")
    private Venues venues;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @NotNull(message = "please login again")
    private Users users;

    @ManyToOne
    @JoinColumn(name = "time_id")
    @NotNull(message = "select slot time")
    private TimeFrame timeFrame;

    @Column(name = "reason")
    private String reason;

    @Column(name = "status")
    private String status;

    @Column(name = "booked_date")
    private LocalDate booked_date;

    @Column(name = "booked_time")
    private LocalTime booked_time;

}
