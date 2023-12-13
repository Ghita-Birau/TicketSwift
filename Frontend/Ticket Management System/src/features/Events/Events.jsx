import styled from "styled-components";
import EventCard from "./EventCard";
import Filters from "./Filters";
// import useEvents from "./useEvents";
// import Loader from "../../ui/Loader";

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

export const fakeData = [
  {
    eventId: 1,
    venue: {
      venueId: 1,
      location: "Aleea Stadionului 2, Cluj-Napoca",
      type: "Stadion",
      capacity: 1000,
      latitude: 46.7675,
      longitude: 23.5725,
    },
    eventTypeName: "Music",
    description: "Muzica Electronica si nu numai",
    name: "Untold",
    startDate: "2023-03-08",
    endDate: "2023-06-08",
    ticketCategories: [
      {
        ticketCategoryId: 1,
        description: "Standard",
        price: 800,
        access: "restricted",
        avaibleQuantity: 5000,
        discountPercentage: 5.0,
        sales: 760.0,
      },
      {
        ticketCategoryId: 5,
        description: "VIP",
        price: 1500,
        access: "full",
        avaibleQuantity: 700,
        discountPercentage: 0.0,
        sales: 1500.0,
      },
      {
        ticketCategoryId: 8,
        description: "Early Bird",
        price: 700,
        access: "full",
        avaibleQuantity: 5000,
        discountPercentage: 15.0,
        sales: 595.0,
      },
      {
        ticketCategoryId: 12,
        description: "Last Minute",
        price: 2000,
        access: "full",
        avaibleQuantity: 700,
        discountPercentage: 0.0,
        sales: 2000.0,
      },
      {
        ticketCategoryId: 15,
        description: "Family",
        price: 2000,
        access: "full",
        avaibleQuantity: 5000,
        discountPercentage: 5.0,
        sales: 1900.0,
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
      latitude: 46.7675,
      longitude: 23.5725,
    },
    eventTypeName: "Sport",
    description: "Muzica Electronica si nu numai",
    name: "Electric Castle",
    startDate: "1894-06-30",
    endDate: "1894-07-04",
    ticketCategories: [
      {
        ticketCategoryId: 2,
        description: "Standard",
        price: 700,
        access: "restricted",
        avaibleQuantity: 1000,
        discountPercentage: 0.0,
        sales: 700.0,
      },
      {
        ticketCategoryId: 6,
        description: "VIP",
        price: 1200,
        access: "full",
        avaibleQuantity: 500,
        discountPercentage: 7.0,
        sales: 1116.0,
      },
      {
        ticketCategoryId: 9,
        description: "Early Bird",
        price: 500,
        access: "full",
        avaibleQuantity: 1000,
        discountPercentage: 20.0,
        sales: 400.0,
      },
      {
        ticketCategoryId: 13,
        description: "Last Minute",
        price: 1500,
        access: "full",
        avaibleQuantity: 500,
        discountPercentage: 0.0,
        sales: 1500.0,
      },
      {
        ticketCategoryId: 16,
        description: "Family",
        price: 1500,
        access: "restricted",
        avaibleQuantity: 1000,
        discountPercentage: 0.0,
        sales: 1500.0,
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
      latitude: 46.908861,
      longitude: 23.808139,
    },
    eventTypeName: "Music",
    description: "Fotbal",
    name: "Meci de fotbal",
    startDate: "1894-06-30",
    endDate: "1894-06-30",
    ticketCategories: [
      {
        ticketCategoryId: 3,
        description: "Standard",
        price: 300,
        access: "restricted",
        avaibleQuantity: 200,
        discountPercentage: 22.0,
        sales: 234.0,
      },
      {
        ticketCategoryId: 7,
        description: "VIP",
        price: 600,
        access: "full",
        avaibleQuantity: 300,
        discountPercentage: 0.0,
        sales: 600.0,
      },
      {
        ticketCategoryId: 10,
        description: "Early Bird",
        price: 150,
        access: "restricted",
        avaibleQuantity: 200,
        discountPercentage: 10.0,
        sales: 135.0,
      },
      {
        ticketCategoryId: 14,
        description: "Last Minute",
        price: 1000,
        access: "restricted",
        avaibleQuantity: 300,
        discountPercentage: 0.0,
        sales: 1000.0,
      },
      {
        ticketCategoryId: 17,
        description: "Family",
        price: 1000,
        access: "full",
        avaibleQuantity: 200,
        discountPercentage: 22.0,
        sales: 780.0,
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
      latitude: 46.770194,
      longitude: 23.578278,
    },
    eventTypeName: "Gastronomy",
    description: "Festival de vin",
    name: "Wine Festival",
    startDate: "1894-06-18",
    endDate: "1894-06-21",
    ticketCategories: [
      {
        ticketCategoryId: 4,
        description: "Standard",
        price: 70,
        access: "restricted",
        avaibleQuantity: 400,
        discountPercentage: 10.0,
        sales: 63.0,
      },
      {
        ticketCategoryId: 11,
        description: "Early Bird",
        price: 50,
        access: "restricted",
        avaibleQuantity: 400,
        discountPercentage: 8.0,
        sales: 46.0,
      },
      {
        ticketCategoryId: 18,
        description: "Family",
        price: 500,
        access: "restricted",
        avaibleQuantity: 400,
        discountPercentage: 10.0,
        sales: 450.0,
      },
    ],
    urlImage:
      "https://vinul.ro/wp-content/uploads/2023/07/COVER_EVENT_WINEFEST_2023-752x440.png",
  },
];

function Events() {
  // const { events = {}, isLoading } = useEvents();

  // if (isLoading) return <Loader />

  return (
    <StyledContainer>
      <StyledFilters>
        <Filters />
      </StyledFilters>
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
