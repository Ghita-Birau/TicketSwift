import { fakeData } from "../utils/Constants";

import Button from "../ui/Button";
import ActiveSlider from "../ui/Slider&Style/ActiveSlider";
import styled from "styled-components";
import Modal from "../ui/Modal";
import Heading from "../ui/Heading";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  background-color: var(--color-gray-50);
  padding: 1.2rem 2rem;
  border-radius: 8px;

  & > footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }
`;

function Dashboard() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/events");
  }

  return (
    <Container>
      <ActiveSlider events={fakeData} />
      <Main>
        <Heading as="h3">
          Welcome to TicketSwift your only application needed to purchase
          tickets.
        </Heading>
        <footer>
          <Modal.Opens name="login-form">
            <Button variation="primary">Login</Button>
          </Modal.Opens>
          <Button variation="secondary" onClick={handleClick}>
            Continue as guest
          </Button>
        </footer>
      </Main>
    </Container>
  );
}

export default Dashboard;
