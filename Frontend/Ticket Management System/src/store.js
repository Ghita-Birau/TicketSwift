import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/contexts/cartSlice";
import filterReducer from "../src/contexts/filterSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filterReducer,
  },
});

export default store;
