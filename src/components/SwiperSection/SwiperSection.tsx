import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Scrollbar } from "swiper";
import NavigateBlock from "../NavigateBlock/NavigateBlock";
import { TypeOfItem } from "../../types/item";
import { getMaxPage } from "../../utils/catalog";
import useCurrentWidth from "../../hooks/useCurrentWidth";
import useSettingsLastWatchSwiper from "../../hooks/useSettingsLastWatchSwiper";
import Item from "../Item/Item";
import "./SwiperSection.scss";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/grid";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";

type SwiperSectionProps = {
  title: string;
  items: TypeOfItem[];
};

function SwiperSection({ title, items }: SwiperSectionProps) {
  const width = useCurrentWidth();
  const { slidesPerView, slidesPerGroup, spaceBetween, gridRow } =
    useSettingsLastWatchSwiper(width);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  useEffect(() => {
    setMaxPage(getMaxPage(items, slidesPerView * gridRow));
  }, [items, slidesPerView, gridRow]);
  const handleClickLeftButton = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };
  const handleClickRightButton = () => {
    if (currentPage === maxPage) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  return (
    <section className="swiper-section">
      <h2 className="swiper-section__title">{title}</h2>
      <Swiper
        modules={[Scrollbar, Grid]}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        spaceBetween={spaceBetween}
        onSlideNextTransitionStart={() => handleClickRightButton()}
        onSlidePrevTransitionStart={() => handleClickLeftButton()}
        // Не получилось отработать строки grid через хук :(
        breakpoints={{
          901: {
            grid: {
              rows: 1,
            },
          },
          451: {
            grid: {
              rows: 2,
            },
          },
          0: {
            grid: {
              rows: 1,
            },
          },
        }}
      >
        <NavigateBlock isSwiper={true} page={currentPage} maxPage={maxPage} />
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Item
              key={item.id}
              name={item.name}
              image={item.image}
              shortDescription={item.shortDescription}
              price={item.price}
              volume={item.volume}
              units={item.units}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SwiperSection;
