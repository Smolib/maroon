/* eslint-disable no-param-reassign */
import "./NavigateButton.scss";
import { MouseEvent, MouseEventHandler } from "react";
import { useSwiper } from "swiper/react";
import leftArrow from "../../../images/left-arrow.svg";
import rigthArrow from "../../../images/rigth-arrow.svg";

type NavigateButtonProps = {
  onClickHandle?: MouseEventHandler<HTMLButtonElement>;
  direction: "left" | "right";
  isSwiper: boolean;
};
function NavigateButton({
  onClickHandle,
  direction,
  isSwiper,
}: NavigateButtonProps) {
  const swiper = useSwiper();
  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    if (onClickHandle) {
      onClickHandle(evt);
    }
    if (isSwiper && direction === "left") {
      swiper.slidePrev();
    }
    if (isSwiper && direction === "right") {
      swiper.slideNext();
    }
  };
  return (
    <button className="navigate-button" onClick={handleClick}>
      {direction === "left" ? (
        <img src={leftArrow} />
      ) : (
        <img src={rigthArrow} />
      )}
    </button>
  );
}

export default NavigateButton;
