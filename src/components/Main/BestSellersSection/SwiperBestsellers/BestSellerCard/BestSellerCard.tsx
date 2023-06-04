import { Item } from "../../../../../types/item";
import "./BestSellerCard.scss";

type BestSellerCardProps = {
  name: Item["name"];
  image: Item["image"];
  type: Item["type"];
};

function BestSellerCard({ name, image, type }: BestSellerCardProps) {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="bestseller-card" style={style}>
      <h3 className="bestseller-card__title">{name}</h3>
      <span className="bestseller-card__description">
        {type.name} для {type.for}
      </span>
      <a className="bestseller-card__link" href="#">Подробнее</a>
    </div>
  );
}

export default BestSellerCard;
