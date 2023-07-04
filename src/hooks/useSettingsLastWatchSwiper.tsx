import { useEffect, useState } from "react";

function useSettingsMainSwiper(width: number) {
  const [slidesPerView, setSlidesPerView] = useState(0);
  const [slidesPerGroup, setSlidesPerGroup] = useState(0);
  const [spaceBetween, setSpaceBetween] = useState(0);
  const [gridRow, setGridRow] = useState(1);

  useEffect(() => {
    if (width > 900) {
      setSlidesPerView(4);
      setSlidesPerGroup(4);
      setSpaceBetween(30);
      setGridRow(1);
    } else if (width > 450) {
      setSlidesPerView(2);
      setSlidesPerGroup(2);
      setSpaceBetween(30);
      setGridRow(2);
    } else {
      setSlidesPerView(1);
      setSlidesPerGroup(1);
      setSpaceBetween(0);
      setGridRow(1);
    }
  }, [width]);

  return {
    slidesPerView,
    slidesPerGroup,
    spaceBetween,
    gridRow,
  };
}

export default useSettingsMainSwiper;
