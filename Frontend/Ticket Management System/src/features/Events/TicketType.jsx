import { formatCurrency } from "../../utils/helpers";
import { HiMiniNoSymbol } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  addTicketToCart,
  decrementTicketQuantity,
  deleteTicket,
  incrementTicketQuantity,
} from "../../contexts/cartSlice";

import styled from "styled-components";
import Button from "../../ui/Button";
import PropTypes from "prop-types";

const Container = styled.div`
  color: var(--color-gray-600);
  padding: 1.2rem 2rem;
  font-size: 1.6rem;
  background-color: var(--color-gray-50);
  border-radius: 8px;
  max-width: 38rem;
`;

const StyledHeader = styled.header`
  border-bottom: 1px solid var(--color-gray-200);
  padding-bottom: 0.6rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 1rem;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  & > p {
    font-size: 1.4rem;
  }

  & > header {
    font-weight: 600;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & > p {
    font-weight: 600;
    font-size: 1.6rem;
  }
`;

const StyledCaracteristic = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > span {
      font-size: 1.6rem;
    }
  }

  & > button {
    flex-grow: 1;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-brand-600);
  color: var(--color-brand-500);

  &:hover {
    color: var(--color-gray-200);
  }
`;

function TicketType({ category, event }) {
  const { eventId, urlImage, description: eventDescription, name } = event;
  const { description, price, ticketCategoryId } = category;
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  const foundItem = cart?.find(
    (el) => el.eventId === eventId && el.ticketCategoryId === ticketCategoryId
  );

  function handleIncrement(e) {
    e.preventDefault();
    dispatch(
      incrementTicketQuantity({
        eventId,
        ticketCategoryId,
      })
    );
  }

  function handleDecrement(e) {
    e.preventDefault();
    dispatch(
      decrementTicketQuantity({
        eventId,
        ticketCategoryId,
      })
    );
  }

  function handleClick(e) {
    e.preventDefault();

    if (foundItem) {
      dispatch(deleteTicket({ ticketCategoryId, eventId }));
    } else {
      dispatch(
        addTicketToCart({
          eventId,
          name,
          urlImage,
          eventDescription,
          description,
          price,
          numberOfTickets: 1,
          ticketCategoryId,
        })
      );
    }
  }

  return (
    <Container>
      <StyledHeader>{description} Ticket</StyledHeader>
      <StyledMain>
        <StyledSection>
          <header>Access</header>
        </StyledSection>
        <StyledSection>
          <header>Fare Rules</header>
          <StyledCaracteristic>
            <HiMiniNoSymbol />
            <span>Non-refundable</span>
          </StyledCaracteristic>
        </StyledSection>
      </StyledMain>
      <StyledFooter>
        <p>{formatCurrency(price)}</p>
        <ButtonsContainer>
          {foundItem !== undefined && (
            <div>
              <StyledButton onClick={handleDecrement}>-</StyledButton>
              <span>{foundItem.numberOfTickets}</span>
              <StyledButton onClick={handleIncrement}>+</StyledButton>
            </div>
          )}
          <Button onClick={(e) => handleClick(e)}>
            {foundItem !== undefined ? "Delete" : "+ Add to cart"}
          </Button>
        </ButtonsContainer>
      </StyledFooter>
    </Container>
  );
}

TicketType.propTypes = {
  category: PropTypes.object,
  event: PropTypes.object,
};

export default TicketType;
