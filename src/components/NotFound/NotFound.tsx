import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="not-found">
      <p>Упс, к сожалению, такой страницы не существует (или она в разработке).</p>
      <p>Лучше вернитесь спокойно на <Link to="/">главную</Link> страницу, и никто не пострадает.</p>
    </div>
  );
}

export default NotFound;
