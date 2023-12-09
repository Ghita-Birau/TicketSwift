import styled from "styled-components";
import Events from "../features/Events/Events";
import Heading from "../ui/Heading";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function Dashboard() {
  return (
    <StyledContainer>
      <Heading as="h2">Dashboard</Heading>
      <Events />
    </StyledContainer>
  );
}

export default Dashboard;
