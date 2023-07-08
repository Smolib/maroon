import items from "../mocks/items";
import { TypeOfItem } from "../types/item";

const getItem = (id: TypeOfItem["id"]) => {
  const result = items.filter((item) => item.id === id);
  return result[0];
};
export default getItem;
