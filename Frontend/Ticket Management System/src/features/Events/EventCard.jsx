import { GrLocationPin } from "react-icons/gr";
import {
  HiCalendarDays,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineMicrophone,
  HiOutlineMusicalNote,
} from "react-icons/hi2";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { useRef, useState } from "react";
import { formatDate } from "../../utils/helpers";

import styled, { css } from "styled-components";
import Heading from "../../ui/Heading";
import TicketType from "./TicketType";
import PropTypes from "prop-types";
import EventDetail from "./EventDetail";
import PriceDetail from "./PriceDetail";

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
  padding: 1.2rem;
  background-color: var(--color-gray-100);
  transition: all 0.3s;
  max-height: 16rem;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: all 0.3s;
  }

  &:hover {
    & > img {
      transform: scale(1.1);
    }
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
    font-size: 1.6rem;
    border: 1px solid var(--color-gray-200);
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0rem 0rem 0rem;
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

  & > h3 {
    text-transform: uppercase;
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 1.4rem 2rem;
  gap: 1rem;

  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-behavior: smooth;
  white-space: nowrap;

  max-width: 85rem;

  & > div {
    min-width: 30rem;
    flex: 0 0 auto;
  }
`;

const ButtonScroll = styled.button`
  position: absolute;
  top: 45%;
  ${(props) =>
    props.position === "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}

  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  background-color: var(--color-gray-50);
  border: 1px solid var(--color-gray-300);

  ${(props) =>
    props.position === "left"
      ? css`
          transform: translate(-40%, -30%);
        `
      : css`
          transform: translate(40%, -30%);
        `}
  transition: all 0.2s;
  display: flex;
  align-items: center;

  & > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-brand-700);
    align-self: center;
  }

  &:hover {
    background-color: var(--color-brand-700);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

    & > svg {
      color: var(--color-gray-50);
    }
  }
`;

function EventCard({ event }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  let icon;

  const scrollToRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 380;
    }
  };

  const scrollToLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 380;
    }
  };

  const {
    description,
    endDate,
    eventTypeName,
    name,
    startDate,
    listEventTicketCategories = [],
    venue,
    urlImage,
  } = event;

  const prices = listEventTicketCategories?.map((category) => category.price);

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

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
              <EventDetail icon={<GrLocationPin />} detail={venue.location} />
              <EventDetail
                icon={<HiCalendarDays />}
                detail={`${formatDate(startDate)} – ${formatDate(endDate)}`}
              />
            </div>
            <PriceDetail
              isOpen={isOpen}
              minPrice={minPrice}
              maxPrice={maxPrice}
              toggleOpen={() => setIsOpen(!isOpen)}
            />
          </Div>
        </InformationContainer>
      </StyledContainer>

      {isOpen && (
        <BackgroundContainer>
          <OptionsContainer ref={containerRef}>
            {listEventTicketCategories?.map((category, index) => (
              <TicketType
                category={category}
                event={event}
                key={category.eventTicketCategoryId}
              />
            ))}
          </OptionsContainer>
          <ButtonScroll onClick={scrollToRight} position="right">
            <HiChevronRight />
          </ButtonScroll>
          <ButtonScroll onClick={scrollToLeft} position="left">
            <HiChevronLeft />
          </ButtonScroll>
        </BackgroundContainer>
      )}
    </Container>
  );
}

EventCard.propTypes = {
  event: PropTypes.object,
};
export default EventCard;
