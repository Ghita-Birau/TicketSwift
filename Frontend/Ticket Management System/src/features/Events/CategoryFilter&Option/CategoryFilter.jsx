import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { useState } from "react";

import styled from "styled-components";
import Heading from "../../../ui/Heading";
import PropTypes from "prop-types";
import HeaderRow from "../../../ui/HeaderRow";
import FilterContainer from "../../../ui/FilterContainer";
import CategoryOption from "./CategoryOption";

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 12rem;
  overflow: scroll;
  padding: 0 1.2rem;
  gap: 1.2rem;
  color: var(--color-gray-500);
`;

function CategoryFilter({ categories }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FilterContainer>
      <HeaderRow onClick={() => setIsOpen((o) => !o)}>
        <Heading as="h4">Category</Heading>

        <span>{isOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
      </HeaderRow>
      {isOpen && (
        <OptionsContainer>
          {categories.map((category) => (
            <CategoryOption
              key={categories.indexOf(category)}
              label={category}
            />
          ))}
        </OptionsContainer>
      )}
    </FilterContainer>
  );
}

CategoryFilter.propTypes = {
  categories: PropTypes.array,
};

export default CategoryFilter;

// import { useDispatch } from "react-redux";
// import { clearAllFilters } from "../../contexts/filterSlice";

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

/* <StyledA onClick={() => dispatch(clearAllFilters())}>Clear All</StyledA> */

// const dispatch = useDispatch();
