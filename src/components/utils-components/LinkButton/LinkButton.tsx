import "./LinkButton.scss";
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

type LinkButtonProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | string;
};
function LinkButton({
  text,
  onClick,
}: LinkButtonProps) {
  return (
    <>
      {typeof onClick === "string" ? (
        <Link className="link-button" to={onClick}>{text}</Link>
      ) : (
        <button onClick={onClick} className="link-button">{text}</button>
      )}
    </>
  );
}

export default LinkButton;
