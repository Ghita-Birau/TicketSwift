import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

import "./style.css";
import EventSwiperCard from "../../features/Events/EventSwiperCard";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSwiperContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 100%;
  height: 30rem;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 30rem;
    flex-shrink: 0;
  }
`;

function ActiveSlider({ events }) {
  const renderSlide = (event) => (
    <SwiperSlide key={event.eventId}>
      <EventSwiperCard event={event} />
    </SwiperSlide>
  );

  return (
    <StyledSwiperContainer>
      <Swiper
        className="sample-slider"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        speed={3000}
      >
        {events.map((category) => renderSlide(category))}
      </Swiper>
    </StyledSwiperContainer>
  );
}

ActiveSlider.propTypes = {
  events: PropTypes.array,
};

export default ActiveSlider;
