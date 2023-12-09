import { GrLocationPin } from "react-icons/gr";
import {
  HiCalendarDays,
  HiChevronDown,
  HiChevronUp,
  HiOutlineMusicalNote,
} from "react-icons/hi2";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { useState } from "react";

import styled from "styled-components";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import TicketType from "./TicketType";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";

const Container = styled.div`
  background-color: var(--color-gray-200);
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;

  font-size: 1.2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;
const ImgContainer = styled.div`
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const InformationContainer = styled.div`
  padding: 1.2rem;
  background-color: var(--color-gray-100);

  & > p {
    text-align: center;
    padding: 1rem 0;
    position: relative;
    margin-bottom: 0.4rem;
  }

  & > p::before,
  & > p::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    border-bottom: 1px solid var(--color-gray-400);
  }

  & > p::before {
    top: 0.5rem;
  }

  & > p::after {
    bottom: 0.5rem;
  }
`;

const StyledLocation = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  & > span {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem;
  }

  & > p {
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.2rem 2rem;
  column-gap: 1rem;
`;

function EventCard({ event }) {
  const [isOpen, setIsOpen] = useState(false);
  let icon;

  const {
    // eventId,
    description,
    endDate,
    eventTypeName,
    name,
    startDate,
    ticketCategories = [],
    venue,
    urlImage,
  } = event;

  const prices = ticketCategories.map((category) => category.price);

  const minPrice = Math.min(...prices);

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
    default:
      icon = "";
      break;
  }

  return (
    <Container>
      <StyledContainer>
        <ImgContainer>
          <img src={urlImage} alt={`${eventTypeName} poster`} />
        </ImgContainer>
        <InformationContainer>
          <Div>
            <Heading as="h3">{name}</Heading>
            <span>
              {icon}
              {eventTypeName}
            </span>
          </Div>
          <p>{description}</p>
          <Div>
            <div>
              <StyledLocation>
                <GrLocationPin />
                <span>{venue.location}</span>
              </StyledLocation>
              <StyledLocation>
                <HiCalendarDays />
                <span>
                  {startDate} &mdash; {endDate}
                </span>
              </StyledLocation>
            </div>
            <Div>
              {!isOpen && <p>{formatCurrency(minPrice, 0)}</p>}

              <Button
                onClick={() => setIsOpen(!isOpen)}
                variation={isOpen ? "secondary" : "primary"}
              >
                <span>{isOpen ? "Hide" : "Select"}</span>
                {isOpen ? <HiChevronUp /> : <HiChevronDown />}
              </Button>
            </Div>
          </Div>
        </InformationContainer>
      </StyledContainer>

      {isOpen && (
        <OptionsContainer>
          {ticketCategories?.map((category) => (
            <TicketType category={category} key={category.ticketCategoryId} />
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
}

EventCard.propTypes = {
  event: PropTypes.object,
};
export default EventCard;
