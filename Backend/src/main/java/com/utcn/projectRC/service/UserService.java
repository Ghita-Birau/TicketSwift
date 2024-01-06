package com.utcn.projectRC.Service;

import com.utcn.projectRC.Exception.NotFoundException;
import com.utcn.projectRC.Request.LoginRequest;
import com.utcn.projectRC.Request.RegisterRequest;
import com.utcn.projectRC.Request.UpdateUserRequest;
import com.utcn.projectRC.Entity.User;
import com.utcn.projectRC.Entity.UserRole;
import com.utcn.projectRC.Repository.OrderRepository;
import com.utcn.projectRC.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final OrderRepository orderRepository;

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
        return user;
    }

    public User findUserById(Integer userId) {
        return userRepository.findByUserId(userId);
    }

    public String deleteUser(Integer userId) {
        User user = userRepository.findByUserId(userId);
        if(user != null) {
            if (user.getLogged()) {
                deleteOrdersByUser(user.getUserId());
                userRepository.delete(user);
                return "User and his orders deleted successfully";
            } else {
                throw new NotFoundException("Please login first");
            }
        } else {
            throw new NotFoundException("User not found");
        }
    }
    public void deleteOrdersByUser(Integer userId) {
        if (userId != null) {
            List<Integer> listOrdersIdMustDelete = orderRepository.findOrderIdsByUserId(userId);
            orderRepository.deleteAllById(listOrdersIdMustDelete);
        }
    }

    public String updateUser(Integer userId, UpdateUserRequest updateUserRequest) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundException("User not found with ID: " + userId));

        if (updateUserRequest.getName() != null) {
            existingUser.setName(updateUserRequest.getName());
        }
        if (updateUserRequest.getAddress() != null) {
            existingUser.setAddress(updateUserRequest.getAddress());
        }
        if (updateUserRequest.getPhoneNumber() != null) {
            existingUser.setPhoneNumber(updateUserRequest.getPhoneNumber());
        }
        if (updateUserRequest.getPassword() != null) {
            existingUser.setPassword(BCrypt.hashpw(updateUserRequest.getPassword(), BCrypt.gensalt()));
        }
        userRepository.save(existingUser);
        return "User details updated successfully";
    }
}
