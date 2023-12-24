import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;

  background-color: var(--color-gray-0);
  padding: 0.6rem 2rem;
  transition: all 0.2s;
  color: var(--color-gray-600);
  border: none;
  font-size: 1.8rem;
  font-weight: 600;

  &:focus {
    outline: none;
  }
`;

function Select({ options, onChange, value, ...props }) {
  return (
    <StyledSelect
      onChange={(e) => onChange(e.target.value)}
      value={value}
      {...props}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          Sort By {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

Select.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Select;
