import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;

  background-color: var(--color-gray-0);
  padding: 0.6rem 2rem;
  transition: all 0.2s;
  color: var(--color-gray-600);
  border: 1px solid var(--color-gray-400);
  border-radius: 0px 0px 0px 3px;

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
          {option.label}
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
