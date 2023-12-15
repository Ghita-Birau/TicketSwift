import { fakeData } from "../../utils/Constants";

import styled from "styled-components";
import EventCard from "./EventCard";
import Filters from "./Filters";
// import Searchbar from "../../ui/Searchbar";
// import useEvents from "./useEvents";
// import Loader from "../../ui/Loader";

const StyledContainer = styled.div`
  background-color: var(--color-gray-100);
  display: grid;
  grid-template-columns: 0.8fr 2.2fr;

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
  max-width: 89rem;
`;

const EventsHeader = styled.header`
  background-color: var(--color-brand-600);
  padding: 1.2rem 2.4rem;
  border-radius: 8px 8px 0px 0px;
  text-align: center;
  color: var(--color-gray-0);
`;

function Events() {
  // const { events = {}, isLoading } = useEvents();

  // if (isLoading) return <Loader />

  return (
    <div>
      {/* <Searchbar placeholder="Search" /> */}
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
    </div>
  );
}

export default Events;
