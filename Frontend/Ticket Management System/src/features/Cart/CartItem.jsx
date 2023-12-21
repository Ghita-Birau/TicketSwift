import { formatCurrency } from "../../utils/helpers";
import {
  HiOutlineBookOpen,
  HiOutlineMicrophone,
  HiOutlineMusicalNote,
  HiOutlineTicket,
} from "react-icons/hi2";

import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteTicket } from "../../contexts/cartSlice";
// import { MdOutlineSportsSoccer } from "react-icons/md";

const ContainerItem = styled.div`
  border-top: 1px solid var(--color-gray-300);
  padding: 1rem 1.2rem;

  display: grid;
  grid-template-columns: 0.28fr 1fr;
`;

const ImgContainer = styled.div`
  max-width: 15rem;
  max-height: 15rem;
  border-radius: 8px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr 0.3fr;
`;

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-bottom: 0.6rem;
`;

const StyledTicketType = styled.p`
  color: var(--color-gray-700);
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  gap: 1.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  & > svg {
    width: 2rem;
    height: 2rem;
    stroke: var(--color-brand-500);
    color: var(--color-brand-500);
  }

  span {
    flex: 1;
    max-width: 30rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  & > input {
    max-width: 4rem;
  }
`;

const StyledLink = styled.a`
  cursor: pointer;
  color: var(--color-brand-600);

  &:link,
  &:hover {
    color: var(--color-brand-700);
  }

  &:visited,
  &:active {
  }
`;

function CartItem({ item }) {
  const dispatch = useDispatch();
  const {
    eventId,
    ticketCategoryId,
    eventTypeName,
    description,
    urlImage,
    name,
    eventDescription,
    numberOfTickets,
    price,
  } = item;
  let icon;

  switch (eventTypeName) {
    case "Music":
      icon = <HiOutlineMusicalNote />;
      break;
    case "Sport":
      icon = <MdOutlineSportsSoccer />;
      break;
    case "Gastronomy":
      icon = <BiDrink />;
      break;
    case "Comedy":
      icon = <HiOutlineMicrophone />;
      break;
    case "Dance":
      break;
    default:
      icon = "";
      break;
  }

  function handleDelete() {
    dispatch(deleteTicket({ ticketCategoryId, eventId }));
  }

  return (
    <ContainerItem>
      <ImgContainer>
        <img src={urlImage} alt={`${description} ticket for ${name}`} />
      </ImgContainer>
      <InfoContainer>
        <Details>
          <StyledHeading as="h3">{name}</StyledHeading>
          <div>
            <StyledTicketType>
              <HiOutlineBookOpen />
              <span>Description: {eventDescription}</span>
            </StyledTicketType>
            <StyledTicketType>
              {icon}
              <span>Event Type: {eventTypeName}</span>
            </StyledTicketType>
            <StyledTicketType>
              <HiOutlineTicket />
              <span>Ticket Type: {description}</span>
            </StyledTicketType>
          </div>
        </Details>
        <Actions>
          <StyledLink onClick={handleDelete}>Remove</StyledLink>
          <input type="text" defaultValue={numberOfTickets} />
        </Actions>
        <p>USD {formatCurrency(price, 0)}</p>
      </InfoContainer>
    </ContainerItem>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
