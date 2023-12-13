import { useState } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0.4rem 0.6rem;

  color: ${(props) =>
    props.ischecked === "true"
      ? "var(--color-brand-600)"
      : "var(--color-gray-400)"};

  &:hover {
    background-color: var(--color-gray-50);
    cursor: pointer;
  }

  & > label {
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  width: 2rem;
  height: 2rem;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

function Checkbox({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevIsChecked) => {
      return !prevIsChecked;
    });
  };

  return (
    <Container ischecked={isChecked.toString()} onClick={handleCheckboxChange}>
      <StyledInput
        type="checkbox"
        value={isChecked}
        checked={isChecked}
        onChange={handleCheckboxChange}
        id={label}
      />
      <label htmlFor={label}>{label}</label>
    </Container>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
};

export default Checkbox;
