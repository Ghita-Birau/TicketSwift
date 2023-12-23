import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTicketToCart(state, action) {
      state.cart.push(action.payload);
      toast.success("Item succesfully added to cart");
    },

    incrementTicketQuantity(state, action) {
      const item = state.cart?.find(
        (item) =>
          item.eventId === action.payload.eventId &&
          item.eventTicketCategoryId === action.payload.eventTicketCategoryId
      );
      item.numberOfTickets++;
    },

    decrementTicketQuantity(state, action) {
      const itemCart = state.cart?.find(
        (item) =>
          item.eventId === action.payload.eventId &&
          item.eventTicketCategoryId === action.payload.eventTicketCategoryId
      );

      if (itemCart.numberOfTickets === 1) {
        state.cart = state.cart.filter(
          (item) =>
            item.eventId !== action.payload.eventId ||
            item.eventTicketCategoryId !== action.payload.eventTicketCategoryId
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
            item.eventTicketCategoryId === action.payload.eventTicketCategoryId
          )
      );
      toast.success("Item succesfully removed");
    },

    updateNrOfTickets(state, action) {
      const itemCart = state.cart?.find(
        (item) =>
          item.eventId === action.payload.eventId &&
          item.eventTicketCategoryId === action.payload.eventTicketCategoryId
      );
      itemCart.numberOfTickets = Number(action.payload.inputVal);
    },

    clearCart(state, action) {
      state.cart = [];
      toast.success("The cart has been cleared");
    },
  },
});

export const getTotalCartPrice = (store) => {
  return store?.cart.cart.reduce(
    (acc, curr) => (acc += Number(curr.price * curr.numberOfTickets)),
    0
  );
};

export const getTotalPriceWithDiscount = (store) => {
  return store?.cart.cart.reduce(
    (acc, curr) => (acc += Number(curr?.sales * curr.numberOfTickets)),
    0
  );
};

export const {
  addTicketToCart,
  incrementTicketQuantity,
  deleteTicket,
  decrementTicketQuantity,
  clearCart,
  updateNrOfTickets,
} = cartSlice.actions;

export default cartSlice.reducer;
