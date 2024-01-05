package com.utcn.projectRC.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String name;
    private String userEmail;
    private String password;
    private LocalDate dateOfBirth;
    private String address;
    private String phoneNumber;
    @Enumerated(EnumType.STRING)
    private UserRole userRole;
//    private Boolean locked = false;
//    private Boolean enabled = false;


    @OneToMany(mappedBy = "userId", cascade = CascadeType.ALL)
    private List<OrderEntity> orders;

    public User(String name, String userEmail, String password, LocalDate dateOfBirth, String address, String phoneNumber, UserRole userRole) {
        this.name = name;
        this.userEmail = userEmail;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.userRole = userRole;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(userRole.name()));
    }

    @Override
    public String getUsername() {
        return userEmail;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    //    @OneToMany(mappedBy = "userId", cascade = CascadeType.ALL)
//    private List<OrderEntity> orders;
//
//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//    private Set<Role> roles;
//
//    @Transient
//    private List<TicketCategory> shoppingCart;


//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        //SimpleGrantedAuthority authority = new SimpleGrantedAuthority(userRole.name());
//        //return Collections.singleton(authority);
//        return List.of(new SimpleGrantedAuthority((userRole.name())));
//    }
//
//    @Override
//    public  String getPassword() {
//        return password;
//    }
//
//    @Override
//    public String getUsername() {
//        return userName;
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return !locked;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return enabled;
//    }
}

// TO DOO
/* Implementare adaugare si finalizare comanda frumos cu service
public void addToCart(TicketCategory ticketCategory, int quantity) {
    if (shoppingCart == null) {
        shoppingCart = new ArrayList<>();
    }
    ticketCategory.setQuantityInCart(quantity);
    shoppingCart.add(ticketCategory);
}

public OrderEntity checkout() {
    if (shoppingCart == null || shoppingCart.isEmpty()) {
        // Handle the case where the cart is empty
        return null;
    }

    // Create a new order with the items from the cart
    OrderEntity order = new OrderEntity(this, new ArrayList<>(shoppingCart), LocalDateTime.now(), shoppingCart.size(), calculateTotalPrice());

    // Clear the cart after checkout
    shoppingCart.clear();

    // Add the order to the user's order history
    if (orders == null) {
        orders = new ArrayList<>();
    }
    orders.add(order);

    return order;
}

private long calculateTotalPrice() {
    // Implement the logic to calculate the total price of items in the cart
}
 */