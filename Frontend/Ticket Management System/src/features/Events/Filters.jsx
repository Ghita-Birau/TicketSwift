import styled from "styled-components";
import Heading from "../../ui/Heading";
import Checkbox from "../../ui/Checkbox";
import Searchbar from "../../ui/Searchbar";
import DateFilter from "./DateFilter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 1.6rem;
  padding: 1rem;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 12rem;
  overflow: scroll;
  padding: 0 1.2rem;
  gap: 1.2rem;
  color: var(--color-gray-500);
`;

const StyledA = styled.a`
  cursor: pointer;
  color: var(--color-brand-600);
  font-size: 1.4rem;
  align-self: flex-end;

  &:link,
  &:hover {
    text-decoration: none;
    border-bottom: 1px solid var(--color-brand-700);
    color: var(--color-brand-700);
  }

  &:visited,
  &:active {
  }
`;

function Filters() {
  const categorys = ["Music", "Sport", "Gastronomy", "Dance", "Comedy"];

  return (
    <Container>
      <Searchbar placeholder="Search" />
      <StyledHeader>
        <Heading as="h3">Category</Heading>
        <StyledA>Clear All</StyledA>
      </StyledHeader>
      <OptionsContainer>
        {categorys.map((category) => (
          <Checkbox key={categorys.indexOf(category)} label={category} />
        ))}
      </OptionsContainer>
      <DateFilter />
    </Container>
  );
}

export default Filters;
