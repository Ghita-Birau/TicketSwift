import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../contexts/filterSlice";

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
  font-size: 1.4rem;
  cursor: pointer;

  & > p {
    text-transform: uppercase;
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
  &:hover {
    & > img {
      transform: scale(1.1);
    }
  }
`;

function EventSwiperCard({ event }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setSearchTerm(event.name));
    navigate("/events");
  }
  return (
    <Container onClick={handleClick}>
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
