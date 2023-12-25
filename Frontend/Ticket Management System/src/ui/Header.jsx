import { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import Window from "./Window";
import CartWindow from "../features/Cart/CartWindow";
import StyledButton from "./Button";

const StyledHeader = styled.header`
  background-color: var(--color-gray-50);
  padding: 1rem 4rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
`;

const Button = styled(StyledButton)`
  padding: 0.4rem;
  background-color: var(--color-gray-50);

  border: none;

  &:focus {
    outline: none;
  }

  & > svg {
    width: 2.6rem;
    height: 2.6rem;
    stroke: var(--color-gray-600);

    &:hover {
      stroke: var(--color-brand-600);
    }
  }

  &:hover {
    background-color: var(--color-gray-50);
  }
`;

const Notification = styled.div`
  position: absolute;
  background-color: var(--color-brand-700);
  color: var(--color-gray-0);
  padding: 0.2rem 0.4rem;
  font-size: 1rem;
  border-radius: 50%;
  top: 0;
  right: -3px;
`;

function Header() {
  const [nrOfItems, setNrOfItems] = useState(0);
  const cart = useSelector((store) => store.cart.cart);
  const cartItems = cart.length;
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(
    function () {
      nrOfItems !== cartItems
        ? setNrOfItems(cartItems)
        : setNrOfItems(nrOfItems);
    },
    [nrOfItems, setNrOfItems, cartItems]
  );

  return (
    <StyledHeader>
      <Container>
        <span>Header</span>
        <Button>Log in</Button>

        <Window.Container>
          <Window.Toggle name="cart-window">
            <Button variation="cart" icon={<HiOutlineShoppingCart />} />

            {currentPath !== "/cart" &&
              nrOfItems !== 0 &&
              nrOfItems === cartItems && (
                <Notification>+{nrOfItems}</Notification>
              )}
          </Window.Toggle>
          <Window.Body name="cart-window">
            <CartWindow />
          </Window.Body>
        </Window.Container>
      </Container>
    </StyledHeader>
  );
}

export default Header;
