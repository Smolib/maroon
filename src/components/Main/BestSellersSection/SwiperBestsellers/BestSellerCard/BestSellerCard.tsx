import { Link } from "react-router-dom";
import { TypeOfItem } from "../../../../../types/item";
import "./BestSellerCard.scss";
import { AppRoute } from "../../../../../utils/consts";

type BestSellerCardProps = {
  name: TypeOfItem["name"];
  image: TypeOfItem["image"];
  shortDescription: TypeOfItem["shortDescription"];
  id: TypeOfItem["id"];
};

function BestSellerCard({
  name,
  image,
  shortDescription,
  id,
}: BestSellerCardProps) {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <article className="bestseller-card" style={style}>
      <h3 className="bestseller-card__title">{name}</h3>
      <span className="bestseller-card__description">{shortDescription}</span>
      <Link
        className="bestseller-card__link"
        to={`${AppRoute.ItemRoute}/${id}`}
      >
        Подробнее
      </Link>
    </article>
  );
}

export default BestSellerCard;
