import { useDispatch, useSelector } from "react-redux";
import {
  addCategoryFilter,
  addTicketCategory,
  clearAllFilters,
  deleteCategory,
  deleteTicketCategory,
  initialState,
  // setSearchTerm,
} from "../../contexts/filterSlice";
import { isEqual } from "lodash";

import styled from "styled-components";
import DateFilter from "./DateFilter&Style/DateFilter";
import CategoryFilter from "./CategoryFilter&Option/CategoryFilter";
import PriceFilter from "./PriceFilter&Style/PriceFilter";
// import Searchbar from "../../ui/Searchbar";
import SortBy from "../../ui/SortBy";
import Button from "../../ui/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 1.6rem;
  padding: 1rem 0rem;
`;

const Footer = styled.footer`
  background-color: var(--color-gray-0);
  text-align: center;
  border-radius: 0px 0px 0px 8px;
  padding: 2rem;
  font-weight: 600;
  font-size: 1.6rem;
  color: var(--color-gray-600);
`;

function Filters() {
  const eventCategories = ["Music", "Sport", "Gastronomy", "Dance", "Comedy"];
  const ticketCategoriesValues = [
    "Standard",
    "VIP",
    "Early Bird",
    "Family",
    "Last Minute",
  ];
  // const searchTerm = useSelector((state) => state.filters.searchTerm);
  const filters = useSelector((store) => store.filters);
  const { categories, ticketCategories } = filters;
  const dispatch = useDispatch();

  // const handleSearchTermChange = (newSearchTerm) => {
  //   dispatch(setSearchTerm(newSearchTerm));
  // };

  function onAddEventCategory(value) {
    dispatch(addCategoryFilter(value));
  }
  function onDeleteEventCategory(value) {
    dispatch(deleteCategory(value));
  }
  function onAddTicketCategory(value) {
    dispatch(addTicketCategory(value));
  }
  function onDeleteTicketCategory(value) {
    dispatch(deleteTicketCategory(value));
  }

  return (
    <Container>
      {/* <Searchbar
        value={searchTerm}
        onChange={(e) => handleSearchTermChange(e.target.value)}
        placeholder="Search"
      /> */}
      <PriceFilter />
      <CategoryFilter
        categories={eventCategories}
        header="Event Category"
        data={categories}
        onAdd={onAddEventCategory}
        onDelete={onDeleteEventCategory}
      />
      <CategoryFilter
        categories={ticketCategoriesValues}
        header="Ticket Category"
        data={ticketCategories}
        onAdd={onAddTicketCategory}
        onDelete={onDeleteTicketCategory}
      />
      <DateFilter />
      <SortBy
        options={[
          {
            value: "name-asc",
            label: "Name (A-Z)",
          },
          {
            value: "name-desc",
            label: "Name (Z-A)",
          },
          {
            value: "price-asc",
            label: "Price (high)",
          },
          {
            value: "price-desc",
            label: "Price (Low)",
          },
        ]}
      />
      {!isEqual(filters, initialState) && (
        <Button
          onClick={() => dispatch(clearAllFilters())}
          variation="clearAllFilters"
        >
          Clear all filters
        </Button>
      )}
      <Footer> </Footer>
    </Container>
  );
}

export default Filters;
