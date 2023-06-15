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
import useSettingsMainSwiper from "../../../../hooks/useSettingsMainSwiper";

type SwiperBestsellersProps = {
  width: number;
};
function SwiperBestsellers({ width }: SwiperBestsellersProps) {
  const { slidesPerView, slidesPerGroup, spaceBetween } = useSettingsMainSwiper(width);

  return (
    <Swiper
      modules={[Scrollbar]}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      spaceBetween={spaceBetween}
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
            shortDescription={item.shortDescription}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperBestsellers;
