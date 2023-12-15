package com.utcn.projectRC.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String userName;
    private String password;
    private String firstName;
    private String secondName;
    private String gender;
    private LocalDate dateOfBirth;
    private String userEmail;
    private String address;

    @OneToMany(mappedBy = "userId", cascade = CascadeType.ALL)
    private List<OrderEntity> orders;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<Role> roles;

    @Transient
    private List<TicketCategory> shoppingCart;

    public User() {

    }
    public User(String userName, String userEmail, List<OrderEntity> orders, List<TicketCategory> shoppingCart) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.orders = orders;
        this.shoppingCart = shoppingCart;
    }

    public User(String userName, String password, String firstName, String secondName, String gender, LocalDate dateOfBirth, String userEmail, String address, List<OrderEntity> orders, Set<Role> roles, List<TicketCategory> shoppingCart) {
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.secondName = secondName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.userEmail = userEmail;
        this.address = address;
        this.orders = orders;
        this.roles = roles;
        this.shoppingCart = shoppingCart;
    }
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