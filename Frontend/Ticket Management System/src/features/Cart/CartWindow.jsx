import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getTotalCartPrice,
  getTotalPriceWithDiscount,
} from "../../contexts/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { WindowContext } from "../../ui/Window";

import styled from "styled-components";
import EmptyCart from "./EmptyCart";
import CartWindowItem from "./CartWindowItem";

const StyledMain = styled.main`
  padding: 1rem 1.4rem;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  max-height: 30rem;

  &::-webkit-scrollbar {
    width: 0;
  }

  & > main {
    overflow-y: auto;
  }

  & > div:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-300);
  }

  & > p {
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;

    & > span {
      font-size: 1.3rem;
      margin-left: 1rem;
      color: var(--color-gray-400);
      text-decoration: line-through;
    }
  }
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
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
  const cart = useSelector((store) => store.cart.cart);
  const totalPrice = useSelector(getTotalCartPrice);
  const totalPriceWithDisc = useSelector(getTotalPriceWithDiscount);
  const { close } = useContext(WindowContext);
  const dispatch = useDispatch();

  function handleClear() {
    dispatch(clearCart());
  }

  return (
    <StyledMain>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <main>
          {cart.map((cartItem) => (
            <CartWindowItem
              item={cartItem}
              key={cartItem.eventTicketCategoryId}
            />
          ))}
        </main>
      )}
      {totalPrice !== 0 && (
        <>
          <p>
            Total price:
            <strong>
              {formatCurrency(
                totalPriceWithDisc < totalPrice
                  ? totalPriceWithDisc
                  : totalPrice
              )}
            </strong>
            {totalPrice - totalPriceWithDisc !== 0 && (
              <span>{formatCurrency(totalPrice)}</span>
            )}
          </p>
          <StyledDiv>
            <Button to="/cart" onClick={() => close()}>
              Go to cart
            </Button>
            <Button onClick={handleClear}>Clear cart</Button>
          </StyledDiv>
        </>
      )}
    </StyledMain>
  );
}

export default CartWindow;
