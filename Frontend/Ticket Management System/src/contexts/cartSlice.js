import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTicketToCart(state, action) {
      state.cart.push(action.payload);
    },

    incrementTicketQuantity(state, action) {
      const item = state.cart?.find(
        (item) =>
          item.eventId === action.payload.eventId &&
          item.ticketCategoryId === action.payload.ticketCategoryId
      );
      item.numberOfTickets++;
    },

    decrementTicketQuantity(state, action) {
      const itemCart = state.cart?.find(
        (item) =>
          item.eventId === action.payload.eventId &&
          item.ticketCategoryId === action.payload.ticketCategoryId
      );

      if (itemCart.numberOfTickets === 1) {
        state.cart = state.cart.filter(
          (item) =>
            item.eventId !== action.payload.eventId ||
            item.ticketCategoryId !== action.payload.ticketCategoryId
        );
      } else {
        itemCart.numberOfTickets--;
      }
    },

    deleteTicket(state, action) {
      state.cart = state.cart.filter(
        (item) =>
          !(
            item.eventId === action.payload.eventId &&
            item.ticketCategoryId === action.payload.ticketCategoryId
          )
      );
    },
  },
});

export const {
  addTicketToCart,
  incrementTicketQuantity,
  deleteTicket,
  decrementTicketQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
