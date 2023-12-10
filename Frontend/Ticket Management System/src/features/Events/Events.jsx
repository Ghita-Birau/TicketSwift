import styled from "styled-components";
import EventCard from "./EventCard";
// import useEvents from "./useEvents";

const StyledContainer = styled.div`
  background-color: var(--color-gray-100);
  display: grid;
  grid-template-columns: 0.6fr 2.2fr;
  gap: 1.2rem;

  min-height: 100vh;
  border-radius: 8px;
`;

const StyledFilters = styled.div`
  background-color: var(--color-gray-100);
`;

const StyledTicketContainer = styled.div`
  background-color: var(--color-gray-100);
  padding: 1.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 90rem;
`;

const EventsHeader = styled.header`
  background-color: var(--color-brand-600);
  padding: 1.2rem 2.4rem;
  border-radius: 8px 8px 0px 0px;
  text-align: center;
  color: var(--color-gray-0);
`;

const fakeData = [
  {
    eventId: 1,
    venue: {
      venueId: 1,
      location: "Aleea Stadionului 2, Cluj-Napoca",
      type: "Stadion",
      capacity: 1000,
    },
    eventTypeName: "Music",
    description: "Muzica Electronica si nu numai",
    name: "Untold",
    startDate: "2023-03-08",
    endDate: "2023-06-08",
    ticketCategories: [
      {
        description: "Standard",
        price: 800,
        ticketCategoryId: 1,
      },
      {
        description: "VIP",
        price: 1500,
        ticketCategoryId: 5,
      },
    ],
    urlImage: "https://viacluj.tv/wp-content/uploads/2022/08/untold-3.jpg",
  },
  {
    eventId: 2,
    venue: {
      venueId: 1,
      location: "Aleea Stadionului 2, Cluj-Napoca",
      type: "Stadion",
      capacity: 1000,
    },
    eventTypeName: "Music",
    description: "Muzica Electronica si nu numai",
    name: "Electric Castle",
    startDate: "1894-06-30",
    endDate: "1894-07-04",
    ticketCategories: [
      {
        description: "Standard",
        price: 700,
        ticketCategoryId: 2,
      },
      {
        description: "VIP",
        price: 1200,
        ticketCategoryId: 6,
      },
    ],
    urlImage:
      "https://www.interregeurope.eu/sites/default/files/styles/banner_image/public/good_practices/good_practice__5293__1620374651.png?itok=tPYd4yGe",
  },
  {
    eventId: 3,
    venue: {
      venueId: 2,
      location: "Bontida Castle, Cluj-Napoca",
      type: "Castle",
      capacity: 4000,
    },
    eventTypeName: "Sport",
    description: "Fotbal",
    name: "Meci de fotbal",
    startDate: "1894-06-30",
    endDate: "1894-06-30",
    ticketCategories: [
      {
        description: "Standard",
        price: 300,
        ticketCategoryId: 3,
      },
      {
        description: "VIP",
        price: 600,
        ticketCategoryId: 7,
      },
      {
        description: "VIP",
        price: 600,
        ticketCategoryId: 7,
      },
    ],
    urlImage:
      "https://mediacdn.libertatea.ro/unsafe/960x539/smart/filters:format(webp):contrast(8):quality(75)/https://static4.libertatea.ro/wp-content/uploads/2022/12/shutterstock2201175331.jpg",
  },
  {
    eventId: 4,
    venue: {
      venueId: 3,
      location: "Central Park, Cluj-Napoca",
      type: "Park",
      capacity: 3000,
    },
    eventTypeName: "Gastronomy",
    description: "Festival de vin",
    name: "Wine Festival",
    startDate: "1894-06-18",
    endDate: "1894-06-21",
    ticketCategories: [
      {
        description: "Standard",
        price: 70,
        ticketCategoryId: 4,
      },
    ],
    urlImage:
      "https://vinul.ro/wp-content/uploads/2023/07/COVER_EVENT_WINEFEST_2023-752x440.png",
  },
];

function Events() {
  // const { events = {}, isLoading } = useEvents();

  // if (isLoading) return <p>Spinner</p>;

  return (
    <StyledContainer>
      <StyledFilters>Filters</StyledFilters>
      <StyledTicketContainer>
        <EventsHeader>All Events</EventsHeader>
        {fakeData.map((event) => (
          <EventCard event={event} key={event.eventId} />
        ))}
      </StyledTicketContainer>
    </StyledContainer>
  );
}

export default Events;
