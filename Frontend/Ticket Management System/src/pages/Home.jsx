import ActiveSlider from "../ui/Slider&Style/ActiveSlider";
import styled from "styled-components";
import Heading from "../ui/Heading";
import useEventsForSlider from "../features/Events/useEventsForSlider";
import Loader from "../ui/Loader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  background-color: var(--color-gray-50);
  padding: 1.2rem 2rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1rem;

  & > footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }
`;

function Dashboard() {
  const { events, isLoading } = useEventsForSlider();

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Main>
        <Heading as="h3">
          Welcome to TicketSwift your only application needed to purchase
          tickets.
        </Heading>
      </Main>
      <ActiveSlider events={events} />

      <Main>
        <p>This application was made by the Koala Knights team</p>
        <img src="../public/Logo.png" alt="logo" />
      </Main>
    </Container>
  );
}

export default Dashboard;
