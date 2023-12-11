import { useSelector } from "react-redux";

import styled from "styled-components";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { getTotalCartPrice } from "../../contexts/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { NavLink } from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";

const StyledMain = styled.main`
  padding: 1rem 1.4rem;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  & > div:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-300);
  }

  & > p {
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
  }

  overflow: scroll;
`;

const Button = styled(NavLink)`
  background-color: var(--color-gray-500);
  text-align: center;
  border: none;
  color: var(--color-gray-50);
  padding: 1rem 1.4rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: var(--color-gray-600);
  }
`;

function CartWindow() {
  const cart = useSelector((store) => store.cart);
  const totalPrice = useSelector(getTotalCartPrice);

  return (
    <StyledMain>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        cart.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.ticketCategoryId} />
        ))
      )}
      {totalPrice !== 0 && (
        <>
          <p>
            Total price:<strong>{formatCurrency(totalPrice)}</strong>
          </p>
          <Button to="/cart">Go to cart</Button>
        </>
      )}
    </StyledMain>
  );
}

export default CartWindow;
