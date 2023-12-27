import { fakeData } from "../utils/Constants";

import ActiveSlider from "../ui/Slider&Style/ActiveSlider";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function Dashboard() {
  return (
    <Container>
      <ActiveSlider events={fakeData} />
    </Container>
  );
}

export default Dashboard;
