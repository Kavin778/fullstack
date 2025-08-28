package com.backend.resource_boooking_portal.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @Column(name = "username")
    @NotNull(message = "Invalid username")
    @Size(min = 3,max = 30,message = "username length should be 3 to 30 characters")
    private String username;

    @Column(name = "department")
    @NotNull(message = "Invalid Department")
    private String department;

    @Column(name = "email")
    @Email(message = "Invalid email")
    private String email;

    @Column(name = "password")
    @Size(min = 8,message = "password should be atLeast 8 character")
    private String password;

    @Column(name = "roles")
    private String roles = "Student";
}
