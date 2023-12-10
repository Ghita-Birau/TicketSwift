import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/contexts/cartSlice";

const store = configureStore({
  reducer: cartReducer,
});

export default store;
