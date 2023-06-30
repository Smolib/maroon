import "./NavigateBlock.scss";
import { MouseEventHandler, useEffect, useState } from "react";
import NavigateButton from "../utils-components/NavigateButton/NavigateButton";

type NavigateBlockProps = {
  isSwiper: boolean;
  onClickLeftButton: MouseEventHandler<HTMLButtonElement>;
  onClickRightButton: MouseEventHandler<HTMLButtonElement>;
  page: number;
  maxPage: number;
};

function NavigateBlock({
  isSwiper,
  onClickLeftButton,
  onClickRightButton,
  page,
  maxPage,
}: NavigateBlockProps) {
  const [isLastPage, setIsLastPage] = useState(false);
  useEffect(() => {
    setIsLastPage(page === maxPage);
  }, [page, maxPage]);
  return (
    <div className="navigate-block">
      <div className="navigate-block__paging-area">
        <span className={`navigate-block__page${isLastPage ? " navigate-block__page_gray" : ""}`}>{page}</span>
        <div className={`navigate-block__decor${isLastPage ? " navigate-block__decor_gray" : ""}`}></div>
        <span className="navigate-block__page navigate-block__page_gray">{maxPage}</span>
      </div>
      <div className="navigate-block__buttons-area">
        <NavigateButton
          onClickHandle={onClickLeftButton}
          direction="left"
          isSwiper={isSwiper}
        />
        <NavigateButton
          onClickHandle={onClickRightButton}
          direction="right"
          isSwiper={isSwiper}
        />
      </div>
    </div>
  );
}

export default NavigateBlock;
