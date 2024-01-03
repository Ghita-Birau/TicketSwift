package com.utcn.projectRC.service;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.DTO.UserDTO;
import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.model.EventType;
import com.utcn.projectRC.model.User;
import com.utcn.projectRC.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private final static String USER_NOT_FOUND_MSG = "user with username %s not found";

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final JwtService jwtService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUserEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG)));
    }

    public String signUpUser(User user) {
        boolean userExists = userRepository.findByUserEmail(user.getUserEmail()).isPresent();

        if(userExists) {
            throw new IllegalStateException("Email already taken");
        }

        String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());

        user.setPassword(encodedPassword);

        userRepository.save(user);
        return "";
    }

    public UserDTO convertUserToUserDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(user.getUserId());
        userDTO.setName(user.getName());
        userDTO.setUserEmail(user.getUserEmail());
        userDTO.setAdress(user.getAddress());
        userDTO.setDateOfBirth(user.getDateOfBirth());
        userDTO.setOrders(user.getOrders());
        userDTO.setRole(user.getUserRole());
        return userDTO;
    }

    public UserDTO getUserByToken(String token) {
        String userEmail = jwtService.extractUserName(token);
        Optional<User> userOptional = userRepository.findByUserEmail(userEmail);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return convertUserToUserDTO(user);
        } else {
            throw new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, userEmail));
        }
        //return userRepository.findByUserEmail(userEmail)
         //       .orElseThrow(() -> new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, userEmail)));
    }
}

