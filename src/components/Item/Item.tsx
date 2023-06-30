import { Link } from "react-router-dom";
import { TypeOfItem } from "../../types/item";
import "./Item.scss";

type BestSellerCardProps = {
  name: TypeOfItem["name"];
  image: TypeOfItem["image"];
  shortDescription: TypeOfItem["shortDescription"];
  price: TypeOfItem["price"];
  volume: TypeOfItem["volume"];
  units: TypeOfItem["units"];
};

function Item({
  name,
  price,
  image,
  shortDescription,
  volume,
  units,
}: BestSellerCardProps) {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <Link className="item" to={""}>
      <article className="item__article" style={style}>
        <div className="item__info-wrapper">
          <h3 className="item__title">{name}</h3>
          <span className="item__price">{price[0]} &#8381;</span>
          <span className="item__description">{shortDescription}</span>
          <span className="item__volume">{volume[0]}{units}</span>
        </div>
      </article>
    </Link>
  );
}

export default Item;
