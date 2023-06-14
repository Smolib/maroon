import { useEffect, useState } from "react";

function useSettingsMainSwiper(width: number) {
  const [slidesPerView, setSlidesPerView] = useState(0);
  const [slidesPerGroup, setSlidesPerGroup] = useState(0);
  const [spaceBetween, setSpaceBetween] = useState(0);

  useEffect(() => {
    if (width >= 1110) {
      const slidesCount = width / 355;
      setSlidesPerView(slidesCount < 3.85 ? slidesCount : 3.85);
      setSlidesPerGroup(3);
      setSpaceBetween(30);
    } else if (width >= 700) {
      const slidesCount = width / 425.5;
      setSlidesPerView(slidesCount < 1.8 ? slidesCount : 1.8);
      setSlidesPerGroup(2);
      setSpaceBetween(0);
    } else {
      setSlidesPerView(1.27);
      setSlidesPerGroup(1);
      setSpaceBetween(0);
    }
  }, [width]);

  return {
    slidesPerView,
    slidesPerGroup,
    spaceBetween,
  };
}

export default useSettingsMainSwiper;
