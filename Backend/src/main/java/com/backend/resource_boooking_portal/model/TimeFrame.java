package com.backend.resource_boooking_portal.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "time_frames")
public class TimeFrame {
    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "time_range")
    private String timeRange;
}
