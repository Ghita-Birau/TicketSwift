import styled from "styled-components";
import Map from "../features/Map/Map";

const StyledContainer = styled.div`
  height: 100%;
`;

function MapPage() {
  return (
    <StyledContainer>
      <Map />
    </StyledContainer>
  );
}

export default MapPage;
