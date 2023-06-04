import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/scss/navigation";
import BestSellerCard from "./BestSellerCard/BestSellerCard";
import items from "../../../../mocks/items";
import "./SwiperBestsellers.scss";
import NavigateButton from "../../../utils-components/SlidePrevButton/NavigateButton";

function SwiperBestsellers() {
  return (
    <Swiper
      modules={[Scrollbar]}
      slidesPerView={3.85}
      slidesPerGroup={3}
      spaceBetween={30}
      loop
    >
      <div className="swiper-navigate-block">
        <NavigateButton direction="left" isSwiper />
        <NavigateButton direction="right" isSwiper />
      </div>
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <BestSellerCard
            name={item.name}
            image={item.image}
            type={item.type}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperBestsellers;
