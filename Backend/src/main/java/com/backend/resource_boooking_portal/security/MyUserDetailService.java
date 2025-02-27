package com.backend.resource_boooking_portal.security;

import com.backend.resource_boooking_portal.entity.Users;
import com.backend.resource_boooking_portal.repository.UserRepository;
import com.backend.resource_boooking_portal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailService implements UserDetailsService {

    private UserRepository userRepository;
    @Autowired
    public MyUserDetailService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = userRepository.findByEmail(username);

        if(users == null){
            System.out.println("User not found:"+username);
            throw new UsernameNotFoundException("User not found");
        }
        System.out.println("User found"+users.getEmail());
        return new MyUserDetails(users);
    }
}
