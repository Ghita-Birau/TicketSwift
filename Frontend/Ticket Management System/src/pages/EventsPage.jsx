import styled from "styled-components";
import Events from "../features/Events/Events";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function EventsPage() {
  return (
    <StyledContainer>
      <Events />
    </StyledContainer>
  );
}

export default EventsPage;
