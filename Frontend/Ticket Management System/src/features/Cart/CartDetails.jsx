import { formatCurrency } from "../../utils/helpers";
import {
  clearCart,
  getTotalCartPrice,
  getTotalPriceWithDiscount,
} from "../../contexts/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import Heading from "../../ui/Heading";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import useCheckout from "./useCheckout";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem 2rem;
  font-size: 1.4rem;
`;

const StyledHeading = styled(Heading)`
  font-weight: bold;
  margin-bottom: 1.2rem;
`;

const StyledMain = styled.main`
  padding: 1.4rem 0rem;
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  column-gap: 3rem;
`;

const MainHeader = styled.header`
  padding: 1rem 1.2rem;
  color: var(--color-gray-600);
  font-weight: bold;
  font-size: 1.6rem;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const LeftSide = styled.div`
  background-color: var(--color-gray-50);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`;

const RightSide = styled.div`
  background-color: var(--color-gray-50);
  border-radius: 8px;
  padding: 1.2rem 1.8rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  max-height: 26rem;
`;

const StyledHeader = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
`;

const StyledMainRight = styled.div`
  margin-top: 3rem;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(2) {
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const StyledPrice = styled.p`
  font-size: 1.8rem;
  color: var(--color-brand-600);
`;

const StyledButton = styled.button`
  background-color: var(--color-brand-600);
  color: var(--color-gray-100);
  border: none;
  border-radius: 7px;

  &:hover {
    background-color: var(--color-brand-700);
  }
  text-align: center;

  font-weight: 600;
  font-size: 1.4rem;

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

  & > svg {
    width: 2rem;
    height: 2rem;
  }

  border-radius: 0px;
  margin-top: 1rem;
`;

function CartDetails() {
  const cart = useSelector((store) => store.cart.cart);
  const store = useSelector((store) => store);
  const nrOfTickets = cart.length;
  const totalPrice = getTotalCartPrice(store);
  const totalDiscounts = getTotalPriceWithDiscount(store);
  const dispatch = useDispatch();
  const { checkout } = useCheckout();

  if (nrOfTickets === 0) return <EmptyCart />;

  function handleClick(e) {
    e.preventDefault();
    let orders = cart.map((item) => ({
      eventName: item.name,
      category: item.description,
      numberOfTickets: item.numberOfTickets,
    }));
    console.log(orders);
    checkout({ orders });
    dispatch(clearCart());
  }

  return (
    <Container>
      <StyledHeading as="h1">Shopping Cart</StyledHeading>
      <StyledMain>
        <LeftSide>
          <MainHeader>{nrOfTickets} Tickets in Cart</MainHeader>
          <ItemsContainer>
            {cart?.map((item) => (
              <CartItem item={item} key={item.eventTicketCategoryId} />
            ))}
          </ItemsContainer>
        </LeftSide>
        <RightSide>
          <StyledHeader>Summary</StyledHeader>
          <StyledMainRight>
            <PriceSection>
              <p>Original price:</p>
              <p>USD {formatCurrency(totalPrice, 0)}</p>
            </PriceSection>
            <PriceSection>
              <p>Discounts:</p>
              <p>-USD {formatCurrency(totalPrice - totalDiscounts, 0)}</p>
            </PriceSection>
            <PriceSection>
              <p>
                <strong>Total:</strong>
              </p>
              <StyledPrice>USD {formatCurrency(totalDiscounts, 0)}</StyledPrice>
            </PriceSection>
            <StyledButton onClick={(e) => handleClick(e)}>
              Checkout
            </StyledButton>
          </StyledMainRight>
        </RightSide>
      </StyledMain>
    </Container>
  );
}

export default CartDetails;
