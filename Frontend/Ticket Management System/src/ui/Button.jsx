import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const buttonTypes = {
  primary: css`
    background-color: var(--color-brand-600);
    color: var(--color-gray-100);
    border: none;
    border-radius: 7px;

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,

  primaryW100: css`
    background-color: var(--color-brand-600);
    color: var(--color-gray-100);
    border: none;
    border-radius: 7px;
    width: 100%;

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,

  secondary: css`
    background-color: var(--color-gray-0);
    color: var(--color-gray-500);
    border-radius: 7px;
    border: 1px solid var(--color-gray-200);
    text-transform: none;

    &:hover {
      background-color: var(--color-gray-400);
      color: var(--color-gray-50);
    }
  `,

  cancel: css`
    background-color: var(--color-gray-0);
    color: var(--color-gray-500);
    border-radius: 7px;
    border: 1px solid var(--color-gray-200);
    text-transform: none;
  `,

  danger: css`
    background-color: var(--color-danger-600);
    color: var(--color-gray-0);
    border: none;
    border-radius: 7px;
    text-transform: none;

    &:hover {
      background-color: var(--color-danger-700);
    }
  `,

  quantity: css`
    background-color: var(--color-gray-100);
    border: 1px solid var(--color-gray-600);
    border-radius: 50%;
    color: var(--color-gray-500);

    &:hover {
      background-color: var(--color-gray-500);
      color: var(--color-gray-50);
    }
  `,

  cart: css`
    background-color: var(--color-gray-50);
    color: var(--color-brand-600);
    border: none;

    padding: 0.6rem;
    border-radius: 8px;

    & > svg {
      width: 2.6rem;
      height: 2.6rem;
      stroke: var(--color-brand-600);

      &:hover {
        stroke: var(--color-brand-600);
      }
    }

    &:hover {
      background-color: var(--color-gray-200);
    }
  `,

  clearAllFilters: css`
    background-color: var(--color-brand-600);
    color: var(--color-gray-100);
    border: none;
    border-radius: 0px;

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,

  authButtons: css`
    background-color: var(--color-gray-50);
    border-radius: 10px;
    padding: 1rem 1.4rem;
    font-size: 1rem;
    transition: all 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    & > svg {
      height: 1.8rem;
      width: 1.8rem;
    }

    &:hover {
      background-color: var(--color-brand-600);
      color: var(--color-gray-0);
    }
  `,

  details: css`
    background-color: var(--color-gray-600);
    color: var(--color-gray-100);
    border: none;
    border-radius: 7px;
    font-size: 1rem;
    margin-top: 0.4rem;

    padding: 0.4rem 1rem;

    &:hover {
      background-color: var(--color-gray-700);
    }
  `,

  swiperDetails: css`
    background-color: var(--color-gray-600);
    color: var(--color-gray-100);
    border: none;
    border-radius: 7px;
    font-size: 1rem;
    margin-top: 0.4rem;

    padding: 0.4rem 1rem;

    &:hover {
      background-color: var(--color-gray-700);
    }
  `,
};

const StyledButton = styled.button`
  text-align: center;

  font-weight: 600;
  font-size: 1.4rem;

  padding: 1rem 1.6rem;

  /* text-transform: uppercase; */
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  &:focus {
    outline: none;
  }

  & > svg {
    width: 2rem;
    height: 2rem;
  }

  ${(props) => buttonTypes[props.variation]}
`;

function Button({ children, onClick, icon = null, variation }) {
  return (
    <StyledButton onClick={onClick} variation={variation}>
      {children && <span>{children}</span>}
      {icon && <span>{icon}</span>}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  variation: PropTypes.string,
};

StyledButton.defaultProps = {
  variation: "primary",
};

export default Button;
