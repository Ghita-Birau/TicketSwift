import { useDispatch } from "react-redux";
import { deleteTicket } from "../../contexts/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { IoMdClose } from "react-icons/io";

import styled from "styled-components";
import PropTypes from "prop-types";
import Heading from "../../ui/Heading";

const Container = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr;
  min-width: 30rem;
  padding: 0.2rem;
  position: relative;
  overflow: hidden;

  /* border: 1px solid blue; */

  & > div:not(:last-child) {
    padding: 0.6rem;
    max-height: 10rem;

    & > img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
`;

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  max-width: 12rem;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.1rem;
  font-size: 1.2rem;
  padding: 0.2rem;

  & > div > p {
    color: var(--color-gray-500);
  }

  & > span {
    font-size: 1.3rem;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  padding: 0.2rem 0.4rem;
  background-color: var(--color-gray-100);
  border: none;
  right: 0.6rem;
  top: 0;

  &:focus {
    outline: none;
  }

  &:hover {
    color: var(--color-brand-600);
  }
`;

function CartWindowItem({ item }) {
  const {
    eventId,
    name,
    urlImage,
    eventDescription,
    description,
    price,
    numberOfTickets,
    eventTicketCategoryId,
  } = item;
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteTicket({ eventId, eventTicketCategoryId }));
  }

  return (
    <Container>
      <div>
        <img src={urlImage} alt={`${eventDescription} `} />
      </div>
      <InformationContainer>
        <div>
          <StyledHeading as="h6">{name}</StyledHeading>
          <p>Ticket-{description}</p>
        </div>
        <span>
          <strong>{formatCurrency(price)}</strong> x{" "}
          <strong>{numberOfTickets}</strong>
        </span>
      </InformationContainer>
      <DeleteButton onClick={handleDelete}>
        <IoMdClose />
      </DeleteButton>
    </Container>
  );
}

CartWindowItem.propTypes = {
  item: PropTypes.object,
};

export default CartWindowItem;
