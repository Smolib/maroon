import { Link } from "react-router-dom";
import { TypeOfItem } from "../../types/item";
import "./Item.scss";
import { AppRoute } from "../../utils/consts";

type BestSellerCardProps = {
  name: TypeOfItem["name"];
  image: TypeOfItem["image"];
  shortDescription: TypeOfItem["shortDescription"];
  price: TypeOfItem["variants"][number]["price"];
  volume: TypeOfItem["variants"][number]["volume"];
  units: TypeOfItem["units"];
  id: TypeOfItem["id"];
};

function Item({
  name,
  price,
  image,
  shortDescription,
  volume,
  units,
  id,
}: BestSellerCardProps) {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <Link className="item" to={`${AppRoute.ItemRoute}/${id}`}>
      <article className="item__article" style={style}>
        <div className="item__info-wrapper">
          <h3 className="item__title">{name}</h3>
          <span className="item__price">{price} &#8381;</span>
          <span className="item__description">{shortDescription}</span>
          <span className="item__volume">{volume}{units}</span>
        </div>
      </article>
    </Link>
  );
}

export default Item;
