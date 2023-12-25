import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";
import TicketType from "../features/Events/TicketType";

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

function ActiveSlider({ categories, event }) {
  const renderSlide = (category) => (
    <SwiperSlide key={category.ticketCategoryId}>
      <TicketType
        category={category}
        event={event}
        key={category.ticketCategoryId}
      />
    </SwiperSlide>
  );

  return (
    <StyledSwiperContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ hide: true }}
      >
        {categories.map((category) => renderSlide(category))}
      </Swiper>
    </StyledSwiperContainer>
  );
}

ActiveSlider.propTypes = {
  categories: PropTypes.array,
  event: PropTypes.object,
};

export default ActiveSlider;
