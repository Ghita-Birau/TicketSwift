import { useDispatch, useSelector } from "react-redux";
import { addCategoryFilter, deleteCategory } from "../contexts/filterSlice";

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
  const { categories } = useSelector((store) => store.filters);
  const dispatch = useDispatch();
  const isChecked = categories.includes(label);

  function handleChange() {
    if (!isChecked) {
      dispatch(addCategoryFilter(label));
    } else {
      dispatch(deleteCategory(label));
    }
  }

  function handleCheckboxChange(event) {
    event.stopPropagation();
  }

  return (
    <Container ischecked={isChecked.toString()} onClick={handleChange}>
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
