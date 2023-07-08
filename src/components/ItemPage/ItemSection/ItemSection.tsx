import { useParams } from "react-router-dom";
import Item from "../../Item/Item";
import getItem from "../../../utils/item";

function ItemSection() {
  const params = useParams();
  const item = getItem(Number(params.id));
  if (item === undefined) {
    return <div>Упс!</div>;
  }
  return (
    <Item
      name={item.name}
      image={item.image}
      shortDescription={item.shortDescription}
      price={item.price}
      volume={item.volume}
      units={item.units}
      id={item.id}
    ></Item>
  );
}

export default ItemSection;
