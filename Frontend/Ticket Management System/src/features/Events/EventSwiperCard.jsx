import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 28rem;
  border-radius: 8px;
  background-color: var(--color-gray-50);
  overflow: hidden;

  & > p {
    text-transform: uppercase;
  }
`;

const ImageContainer = styled.div`
  min-height: 20rem;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

function EventSwiperCard({ event }) {
  return (
    <Container>
      <ImageContainer>
        <img src={event.urlImage} alt={`${event.urlImage}`} />
      </ImageContainer>
      <p>{event.name}</p>
    </Container>
  );
}

EventSwiperCard.propTypes = {
  event: PropTypes.object,
};

export default EventSwiperCard;
