import { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import PropTypes from "prop-types";
import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  padding: 0.2rem 0.8rem 0.2rem 3rem;
  border: 1px solid var(--color-gray-400);
  transition: all 0.2s;
  border-radius: 4px;
  font-size: 1.8rem;
  width: 200px; /* Ajustează lățimea inițială a câmpului de căutare */

  &:focus {
    outline: none;
    border: 1px solid var(--color-brand-600);
    width: 300px; /* Ajustează lățimea când este în stare de focus */
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 0.6rem;
  top: 25%;
  transform: translate(0, -15%);
`;

function Searchbar({ value, onChange, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SearchContainer>
      <StyledLabel htmlFor="search">
        <HiOutlineMagnifyingGlass />
      </StyledLabel>
      <StyledInput
        id="search"
        type="text"
        value={value === null ? "" : value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isfocused={isFocused.toString()}
      />
    </SearchContainer>
  );
}

Searchbar.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.node,
  onChange: PropTypes.func,
};

export default Searchbar;
