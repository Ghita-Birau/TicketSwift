package com.utcn.projectRC.service;

import com.utcn.projectRC.Exception.NotFoundException;
import com.utcn.projectRC.Request.LoginRequest;
import com.utcn.projectRC.Request.RegisterRequest;
import com.utcn.projectRC.model.User;
import com.utcn.projectRC.model.UserRole;
import com.utcn.projectRC.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User findUser(String userEmail) {
        User user = userRepository.findByUserEmail(userEmail);
        if (user != null) {
            return user;
        } else {
            throw new IllegalStateException("User is not found");
        }
    }
    public void register(RegisterRequest registerRequest) {
        if (userRepository.existsByUserEmail(registerRequest.getUserEmail())) {
            throw new IllegalStateException("A user with the same email address already exists");
        }

        User user = buildUserFromRegisterRequest(registerRequest);
        userRepository.save(user);
    }

    public String login(LoginRequest loginRequest) {
        String userEmail = loginRequest.getUserEmail();
        String password = loginRequest.getPassword();

        User authenticatedUser = userRepository.findByUserEmail(userEmail);

        if (authenticatedUser != null && BCrypt.checkpw(password, authenticatedUser.getPassword())) {
            authenticatedUser.setLogged(true);
            userRepository.save(authenticatedUser);
            return "User authenticated successfully";
        } else {
            throw new IllegalStateException("Invalid credentials");
        }
    }

    public String logout(String userEmail) {
        User userToLogout = userRepository.findByUserEmail(userEmail);

        if (userToLogout != null) {
            if(userToLogout.getLogged()) {
                userToLogout.setLogged(false);
                userRepository.save(userToLogout);
                return "User logged out successfully";
            } else {
                throw new IllegalStateException("This user is logout");
            }
        } else {
            throw new NotFoundException("User not found");
        }
    }

    private User buildUserFromRegisterRequest(RegisterRequest registerRequest) {
        User user = new User();
        user.setUserEmail(registerRequest.getUserEmail());
        user.setName(registerRequest.getName());
        user.setPassword(BCrypt.hashpw(registerRequest.getPassword(), BCrypt.gensalt()));
        user.setAddress(registerRequest.getAddress());
        user.setDateOfBirth(registerRequest.getDateOfBirth());
        user.setPhoneNumber(registerRequest.getPhoneNumber());
        user.setUserRole(UserRole.USER);
        //user.setOrders(new ArrayList<>());
        return user;
    }
}
