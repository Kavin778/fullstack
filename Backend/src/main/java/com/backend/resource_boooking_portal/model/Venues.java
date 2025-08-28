package com.backend.resource_boooking_portal.model;

import jakarta.persistence.*;
import jakarta.validation.MessageInterpolator;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.annotations.Type;

@Data
@Entity
@Table(name = "venues")
public class Venues {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @NotNull(message = "venue name should not be null")
    @Column(name = "name")
    private String name;

    @Column(name = "is_avail")
    @NotNull(message = "should not be null")
    private boolean availability;

}
