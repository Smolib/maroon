import "./AnimatedButton.scss";
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

type AnimatedButtonProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | string;
  typeOfButton?: "submit" | "reset" | "button"
};
function AnimatedButton({
  text,
  onClick,
  typeOfButton,
}: AnimatedButtonProps) {
  return (
    <>
      {typeof onClick === "string" ? (
        <Link className="link-button" to={onClick}>{text}</Link>
      ) : (
        <button type={typeOfButton} onClick={onClick} className="link-button">{text}</button>
      )}
    </>
  );
}

export default AnimatedButton;
