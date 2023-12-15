// import { useDispatch } from "react-redux";
// import { clearAllFilters } from "../../contexts/filterSlice";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { useState } from "react";

import styled from "styled-components";
import Heading from "../../ui/Heading";
import PropTypes from "prop-types";
import Checkbox from "../../ui/Checkbox";

const Container = styled.div`
  background-color: var(--color-gray-0);
  padding: 0.6rem 2rem;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0;
  cursor: pointer;

  & > span > svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    & > span > svg {
      color: var(--color-brand-500);
    }
  }
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

// const StyledA = styled.a`
//   cursor: pointer;
//   color: var(--color-brand-600);
//   font-size: 1.4rem;
//   align-self: flex-end;

//   &:link,
//   &:hover {
//     text-decoration: none;
//     border-bottom: 1px solid var(--color-brand-700);
//     color: var(--color-brand-700);
//   }

//   &:visited,
//   &:active {
//   }
// `;

function CategoryFilter({ categories }) {
  const [isOpen, setIsOpen] = useState(false);
  // const dispatch = useDispatch();

  return (
    <Container>
      <StyledHeader onClick={() => setIsOpen((o) => !o)}>
        <Heading as="h5">Category</Heading>
        {/* <StyledA onClick={() => dispatch(clearAllFilters())}>Clear All</StyledA> */}
        <span>{isOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
      </StyledHeader>
      {isOpen && (
        <OptionsContainer>
          {categories.map((category) => (
            <Checkbox key={categories.indexOf(category)} label={category} />
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
}

CategoryFilter.propTypes = {
  categories: PropTypes.array,
};

export default CategoryFilter;
