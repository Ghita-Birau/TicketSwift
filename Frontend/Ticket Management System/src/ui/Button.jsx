import styled from "styled-components";

const buttonTypes = {
  primary: {
    backgroundColor: "var(--color-brand-600)",
    color: "var(--color-gray-100)",
    border: "none",
    hover: "var(--color-brand-700)",
  },

  secondary: {
    backgroundColor: "var(--color-gray-0)",
    color: "var(--color-gray-500)",
    border: "1px solid var(--color-gray-300)",
    hover: "var(--color-brand-300)",
  },

  danger: {
    backgroundColor: "var(--color-error-600)",
    color: "var(--color-gray-0)",
    border: "none",
  },
};

const StyledButton = styled.button`
  background-color: ${(props) => buttonTypes[props.variation].backgroundColor};
  color: ${(props) => buttonTypes[props.variation].color};
  border: ${(props) => buttonTypes[props.variation].border};
  text-align: center;

  font-weight: 600;
  font-size: 1.4rem;

  border-radius: 7px;
  padding: 1rem 1.6rem;

  text-transform: uppercase;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => buttonTypes[props?.variation].hover};
  }

  & > svg {
    width: 2rem;
    height: 2rem;
  }
`;

StyledButton.defaultProps = {
  variation: "primary",
};

export default StyledButton;
