import { Item } from "../../../../../types/item";
import "./BestSellerCard.scss";

type BestSellerCardProps = {
  name: Item["name"];
  image: Item["image"];
  shortDescription: Item["shortDescription"];
};

function BestSellerCard({ name, image, shortDescription }: BestSellerCardProps) {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="bestseller-card" style={style}>
      <h3 className="bestseller-card__title">{name}</h3>
      <span className="bestseller-card__description">
        {shortDescription}
      </span>
      <a className="bestseller-card__link" href="#">Подробнее</a>
    </div>
  );
}

export default BestSellerCard;
