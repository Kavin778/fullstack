package com.backend.resource_boooking_portal.dto;

import com.backend.resource_boooking_portal.entity.Users;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class UserDTO {
    private int id;
    private String username;
    private String department;
    private String email;

    public UserDTO(Users users){
        this.id=users.getId();
        this.username =users.getUsername();
        this.department = users.getDepartment();
        this.email=users.getEmail();
    }
}
