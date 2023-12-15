import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  dateRange: {
    startDate: null,
    endDate: null,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // Category Action Creators
    addCategoryFilter(state, action) {
      state.categories.push(action.payload);
    },

    deleteCategory(state, action) {
      const indexToRemove = state.categories.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.categories.splice(indexToRemove, 1);
      }
    },

    clearAllFilters(state, action) {
      state.categories = [];
    },

    addStartDate(state, action) {
      state.dateRange.startDate = action.payload;
    },

    addEndDate(state, action) {
      state.dateRange.endDate = action.payload;
    },
  },
});

export const {
  addCategoryFilter,
  clearAllFilters,
  deleteCategory,
  addStartDate,
  addEndDate,
} = filterSlice.actions;

export default filterSlice.reducer;
