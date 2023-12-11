import styled from "styled-components";
import Heading from "../ui/Heading";
import Events from "../features/Events/Events";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function EventsPage() {
  return (
    <StyledContainer>
      <Heading as="h2">Dashboard</Heading>
      <Events />
    </StyledContainer>
  );
}

export default EventsPage;
