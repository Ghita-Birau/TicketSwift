import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
});
