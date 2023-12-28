import { fakeData } from "../utils/Constants";

import Button from "../ui/Button";
import ActiveSlider from "../ui/Slider&Style/ActiveSlider";
import styled from "styled-components";
import Modal from "../ui/Modal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function Dashboard() {
  return (
    <Container>
      <ActiveSlider events={fakeData} />
      <Modal.Opens name="login-form">
        <Button>Log in</Button>
      </Modal.Opens>
    </Container>
  );
}

export default Dashboard;
