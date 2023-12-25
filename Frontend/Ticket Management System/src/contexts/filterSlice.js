import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  searchTerm: null,
  categories: [],
  dateRange: {
    isOn: false,
    startDate: null,
    endDate: null,
  },
  price: {
    isOn: false,
    range: [0, 10000],
  },
  hasDiscount: false,
  ticketCategories: [],
  sortBy: "name-asc",
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

    clearAllFilters(state) {
      return { ...initialState };
    },

    // Date Action Creators
    addStartDate(state, action) {
      if (state.dateRange.isOn) {
        state.dateRange.startDate = action.payload;
      }
    },

    addEndDate(state, action) {
      if (state.dateRange.isOn) {
        state.dateRange.endDate = action.payload;
      }
    },

    activateDate(state, action) {
      state.dateRange.isOn = action.payload;
      if (!state.dateRange.isOn) {
        state.dateRange = initialState.dateRange;
      }
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

    // SortBy Action Creator
    changeSortByValue(state, action) {
      state.sortBy = action.payload;
    },

    // Search Action Creator
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },

    // hasDiscount Action Creator
    toggleHasDiscount(state, action) {
      state.hasDiscount = action.payload;
    },

    // TicketCategories Action Creator
    addTicketCategory(state, action) {
      state.ticketCategories.push(action.payload);
    },

    deleteTicketCategory(state, action) {
      const indexToRemove = state.ticketCategories.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.ticketCategories.splice(indexToRemove, 1);
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
  changeSortByValue,
  setSearchTerm,
  activateDate,
  toggleHasDiscount,
  addTicketCategory,
  deleteTicketCategory,
} = filterSlice.actions;

export default filterSlice.reducer;
