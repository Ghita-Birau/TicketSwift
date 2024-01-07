import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  position: relative;
  padding: 0.6rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 28rem;
  overflow: hidden;

  font-size: 1.4rem;
  background-color: var(--color-gray-200);
  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    transform: translateY(-1.2rem);
  }

  & > p {
    text-transform: uppercase;
    z-index: 2;
    position: relative;
    transition: color 0.3s ease;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 25rem;
  transition: all 0.2s;

  & > img {
    transition: all 0.3s;
    width: 100%;
    height: 100%;
  }
`;

function EventSwiperCard({ event }) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <Container isactive={isActive.toString()} onClick={handleClick}>
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
