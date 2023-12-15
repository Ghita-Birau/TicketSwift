import styled from "styled-components";
import DateFilter from "./DateFilter&Style/DateFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 1.6rem;
  padding: 1rem 0rem;
`;

function Filters() {
  const categories = ["Music", "Sport", "Gastronomy", "Dance", "Comedy"];

  return (
    <Container>
      <CategoryFilter categories={categories} />
      <DateFilter />
      <PriceFilter />
    </Container>
  );
}

export default Filters;
