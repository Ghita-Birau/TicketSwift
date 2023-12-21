import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { WindowContext } from "../../ui/Window";

const StyledDiv = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1.2rem 2rem;

  & > p {
    color: var(--color-gray-400);
  }
`;

const StyledNavLink = styled(NavLink)`
  color: var(--color-brand-600);

  &:hover {
    color: var(--color-brand-700);
  }
`;

function EmptyCart() {
  const { close } = useContext(WindowContext);

  return (
    <StyledDiv>
      <p>Your cart is empty.</p>
      <StyledNavLink to="/events" onClick={() => close()}>
        Keep shopping
      </StyledNavLink>
    </StyledDiv>
  );
}

export default EmptyCart;
