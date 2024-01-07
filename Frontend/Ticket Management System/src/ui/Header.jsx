import { useEffect, useState } from "react";
import { HiOutlineShoppingCart, HiOutlineUserCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setSearchTerm } from "../contexts/filterSlice";

import styled from "styled-components";
import Window from "./Window";
import CartWindow from "../features/Cart/CartWindow";
import Searchbar from "./Searchbar";
import Button from "./Button";
import useLogout from "../features/authentication/useLogout";
import useUser from "../features/authentication/useUser";

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

const Div = styled.div`
  margin-right: -1rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

function Header() {
  const [nrOfItems, setNrOfItems] = useState(0);
  const searchTerm = useSelector((state) => state.filters.searchTerm);
  const cart = useSelector((store) => store.cart.cart);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useUser();
  const { logout } = useLogout();
  const isLoggedIn = user != null;

  const cartItems = cart.length;
  const currentPath = location.pathname;

  const handleSearchTermChange = (newSearchTerm) => {
    dispatch(setSearchTerm(newSearchTerm));
  };

  useEffect(
    function () {
      nrOfItems !== cartItems
        ? setNrOfItems(cartItems)
        : setNrOfItems(nrOfItems);
    },
    [nrOfItems, setNrOfItems, cartItems]
  );

  function handleClick() {
    logout();
  }

  return (
    <StyledHeader>
      <Container>
        <Searchbar
          value={searchTerm}
          onChange={(e) => handleSearchTermChange(e.target.value)}
          placeholder="Search"
        />

        <ActionContainers>
          <Button variation="secondary" onClick={handleClick}>
            Logout
          </Button>

          {isLoggedIn && (
            <Div>
              <Button
                variation="cart"
                icon={<HiOutlineUserCircle />}
                onClick={() => navigate("/account")}
              />
            </Div>
          )}

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
