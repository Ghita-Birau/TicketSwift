import { useSelector } from "react-redux";

import styled from "styled-components";
import Heading from "../../ui/Heading";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

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
  padding: 1rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`;

function CartDetails() {
  const cart = useSelector((store) => store.cart.cart);
  const nrOfTickets = cart.length;

  if (nrOfTickets === 0) return <EmptyCart />;

  return (
    <Container>
      <StyledHeading as="h1">Shopping Cart</StyledHeading>
      <StyledMain>
        <LeftSide>
          <MainHeader>{nrOfTickets} Tickets in Cart</MainHeader>
          <ItemsContainer>
            {cart?.map((item) => (
              <CartItem item={item} key={item.ticketCategoryId} />
            ))}
          </ItemsContainer>
        </LeftSide>
        <RightSide>
          <h4>Summary</h4>
        </RightSide>
      </StyledMain>
    </Container>
  );
}

export default CartDetails;
