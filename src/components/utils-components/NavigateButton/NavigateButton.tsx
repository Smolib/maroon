/* eslint-disable no-param-reassign */
import "./NavigateButton.scss";
import { MouseEventHandler } from "react";
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
  if (isSwiper && direction === "left") {
    const swiper = useSwiper();
    onClickHandle = () => swiper.slidePrev();
  }
  if (isSwiper && direction === "right") {
    const swiper = useSwiper();
    onClickHandle = () => swiper.slideNext();
  }
  return (
    <button className="navigate-button" onClick={onClickHandle}>
      {direction === "left" ? (
        <img src={leftArrow} />
      ) : (
        <img src={rigthArrow} />
      )}
    </button>
  );
}

export default NavigateButton;
