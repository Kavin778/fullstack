package com.backend.resource_boooking_portal.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
@Table
public class Bookings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "venue_id",nullable = false)
    private Venues venues;

    @ManyToOne
    @JoinColumn(name = "user_id",nullable = false)
    private Users users;

    @Column(name = "from_date",nullable = false)
    private Date fromDate;

    @Column(name = "to_date",nullable = false)
    private Date toDate;

    @Column(name = "from_time",nullable = false)
    private Time fromTime;

    @Column(name = "to_time",nullable = false)
    private Time toTime;

    @Column(columnDefinition = "TEXT")
    private String reason;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false,columnDefinition = "ENUM('pending','approved','rejected') DEFAULT'pending'")
    private Status status = Status.PENDING;

    @Column(name = "created_at",nullable = false,updatable = false,insertable = false,columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp createdAt;

    public enum Status{
        PENDING,APPROVED,REJECTED
    }
}
