import { formatCurrency } from "../../utils/helpers";
import { HiMiniNoSymbol, HiOutlineKey } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTicket,
  addTicketToCart,
  decrementTicketQuantity,
  incrementTicketQuantity,
} from "../../contexts/cartSlice";

import styled from "styled-components";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Container = styled.div`
  color: var(--color-gray-600);
  padding: 1.2rem 2rem;
  font-size: 1.6rem;
  background-color: var(--color-gray-50);
  border-radius: 8px;
  max-width: 38rem;
  position: relative;
  overflow: hidden;
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
`;

const PriceDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > p {
    font-weight: 600;
    font-size: 1.6rem;
    text-decoration: ${(props) =>
      props.discount !== 0 ? "line-through" : "none"};

    color: ${(props) =>
      props.discount !== 0 ? "var(--color-gray-400)" : "var(--color-gray-700)"};
    text-decoration-thickness: 0.24rem;
    text-decoration-style: solid;
  }

  & > span {
    font-size: 1.6rem;
    font-weight: 600;
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

const StyledDiscount = styled.div`
  position: absolute;
  top: 4%;
  right: -15%;
  background-color: var(--color-discount);
  color: var(--color-gray-50);
  padding: 0.4rem 6rem;
  transform: rotate(45deg);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
`;

function TicketType({ category, event }) {
  const {
    eventId,
    urlImage,
    description: eventDescription,
    name,
    eventTypeName,
  } = event;

  const {
    description,
    price,
    eventTicketCategoryId,
    sales,
    discountPercentage,
    access,
  } = category;

  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cart);

  const foundItem = cart?.find(
    (el) =>
      el.eventId === eventId &&
      el.eventTicketCategoryId === eventTicketCategoryId
  );

  function handleIncrement(e) {
    e.preventDefault();
    dispatch(
      incrementTicketQuantity({
        eventId,
        eventTicketCategoryId,
      })
    );
  }

  function handleDecrement(e) {
    e.preventDefault();
    dispatch(
      decrementTicketQuantity({
        eventId,
        eventTicketCategoryId,
      })
    );
  }

  function handleAdd(e) {
    e.preventDefault();

    dispatch(
      addTicketToCart({
        eventId,
        name,
        urlImage,
        eventDescription,
        description,
        price,
        sales,
        numberOfTickets: 1,
        eventTicketCategoryId,
        eventTypeName,
      })
    );
  }

  function handleDelete(e) {
    e.preventDefault();

    if (foundItem) {
      dispatch(deleteTicket({ eventTicketCategoryId, eventId }));
    }
  }

  return (
    <Container>
      <StyledHeader>{description} Ticket</StyledHeader>
      <StyledMain>
        <StyledSection>
          <header>Access</header>
          <StyledCaracteristic>
            <HiOutlineKey />
            <span>{access}</span>
          </StyledCaracteristic>
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
        <PriceDiv discount={discountPercentage}>
          <p>{formatCurrency(price)} </p>
          {discountPercentage !== 0 && <span>{formatCurrency(sales)}</span>}
        </PriceDiv>

        <ButtonsContainer>
          {foundItem !== undefined && (
            <div>
              <StyledButton onClick={handleDecrement} variation="quantity">
                -
              </StyledButton>
              <span>{foundItem.numberOfTickets}</span>
              <StyledButton onClick={handleIncrement} variation="quantity">
                +
              </StyledButton>
            </div>
          )}

          {foundItem !== undefined && (
            <Modal>
              <Modal.Opens name="delete-ticket">
                <Button variation={"danger"}>Delete</Button>
              </Modal.Opens>
              <Modal.Window name="delete-ticket">
                <ConfirmDelete
                  resource="ticket"
                  onClickDelete={(e) => handleDelete(e)}
                />
              </Modal.Window>
            </Modal>
          )}

          {foundItem === undefined && (
            <Button onClick={(e) => handleAdd(e)} variation={"primary"}>
              + Add to cart
            </Button>
          )}
        </ButtonsContainer>
      </StyledFooter>
      {discountPercentage !== 0 && (
        <StyledDiscount>{discountPercentage}%</StyledDiscount>
      )}
    </Container>
  );
}

TicketType.propTypes = {
  category: PropTypes.object,
  event: PropTypes.object,
};

export default TicketType;
