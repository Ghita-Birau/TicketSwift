import { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

import styled from "styled-components";
import Window from "./Window";
import CartWindow from "../features/Cart/CartWindow";
import StyledButton from "./Button";
import { ModalContext } from "./Modal";

const StyledHeader = styled.header`
  background-color: var(--color-gray-50);
  padding: 1rem 4rem;
  border-left: 1px solid var(--color-gray-200);
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

const ActionContainers = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function Header() {
  const [nrOfItems, setNrOfItems] = useState(0);
  const { open, close } = useContext(ModalContext);
  const cart = useSelector((store) => store.cart.cart);
  const location = useLocation();

  const cartItems = cart.length;
  const currentPath = location.pathname;

  useEffect(
    function () {
      nrOfItems !== cartItems
        ? setNrOfItems(cartItems)
        : setNrOfItems(nrOfItems);
    },
    [nrOfItems, setNrOfItems, cartItems]
  );

  function handleClick() {
    close();
    open("login-form");
  }

  return (
    <StyledHeader>
      <Container>
        <span>Header</span>

        <ActionContainers>
          <Button variation="secondary" onClick={handleClick}>
            Login
          </Button>
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
        </ActionContainers>
      </Container>
    </StyledHeader>
  );
}

export default Header;
