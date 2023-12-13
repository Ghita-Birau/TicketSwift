import { useState } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.4rem 1rem;
  border: 1px solid var(--color-gray-600);
  border-radius: 14px;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border: 1px solid var(--color-brand-600);
  }
`;

function Searchbar({ value, onChange, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      isfocused={isFocused.toString()}
    />
  );
}

Searchbar.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.node,
  onChange: PropTypes.func,
};

export default Searchbar;
