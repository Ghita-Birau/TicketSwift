import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/contexts/cartSlice";
import filterReducer from "../src/contexts/filterSlice";
import userReducer from "./contexts/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filterReducer,
    user: userReducer,
  },
});

export default store;
