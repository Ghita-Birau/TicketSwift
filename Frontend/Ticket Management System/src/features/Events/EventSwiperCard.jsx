import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setSearchTerm } from "../../contexts/filterSlice";

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

  ${(props) =>
    props.isactive === "true" &&
    `
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
      transition: background 0.3s ease;
    }

    & > p {
      color: var(--color-white);
    }
  `}

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

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  function handleClick() {
    setIsActive(!isActive);
    // dispatch(setSearchTerm(event.name));
    // navigate("/events");
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
