import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../contexts/filterSlice";

import styled from "styled-components";
import DateFilter from "./DateFilter&Style/DateFilter";
import CategoryFilter from "./CategoryFilter&Option/CategoryFilter";
import PriceFilter from "./PriceFilter&Style/PriceFilter";
import Searchbar from "../../ui/Searchbar";
import SortBy from "../../ui/SortBy";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 1.6rem;
  padding: 1rem 0rem;
`;

function Filters() {
  const categories = ["Music", "Sport", "Gastronomy", "Dance", "Comedy"];
  const searchTerm = useSelector((state) => state.filters.searchTerm);
  const dispatch = useDispatch();

  const handleSearchTermChange = (newSearchTerm) => {
    dispatch(setSearchTerm(newSearchTerm));
  };

  return (
    <Container>
      <Searchbar
        value={searchTerm}
        onChange={(e) => handleSearchTermChange(e.target.value)}
        placeholder="Search"
      />
      <PriceFilter />
      <CategoryFilter categories={categories} />
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
    </Container>
  );
}

export default Filters;
