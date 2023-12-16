import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  dateRange: {
    startDate: null,
    endDate: null,
  },
  price: {
    isOn: false,
    range: [0, 100],
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

    // Date Action Creators
    addStartDate(state, action) {
      state.dateRange.startDate = action.payload;
    },

    addEndDate(state, action) {
      state.dateRange.endDate = action.payload;
    },

    // Price Action Creators
    setPriceRange(state, action) {
      initialState.price.range = action.payload;
    },

    turnOnPrice(state, action) {
      state.price.isOn = action.payload;
      if (!state.price.isOn) {
        state.price.range = initialState.price.range;
      }
    },

    changeValues(state, action) {
      if (state.price.isOn) {
        state.price.range = action.payload;
      }
    },
  },
});

export const {
  addCategoryFilter,
  clearAllFilters,
  deleteCategory,
  addStartDate,
  addEndDate,
  changeValues,
  turnOnPrice,
  setPriceRange,
} = filterSlice.actions;

export default filterSlice.reducer;
