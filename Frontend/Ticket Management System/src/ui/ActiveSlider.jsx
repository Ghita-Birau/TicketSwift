import { fakeData } from "../features/Events/Events";
import EventSwiperCard from "../features/Events/EventSwiperCard";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";

const StyledSwiperContainer = styled.div`
  overflow: hidden;
`;

function ActiveSlider() {
  return (
    <StyledSwiperContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ hide: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {fakeData.map((event) => (
          <SwiperSlide key={event.eventId}>
            <EventSwiperCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperContainer>
  );
}

export default ActiveSlider;
