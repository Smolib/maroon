import items from "../mocks/items";
import { TypeOfItem } from "../types/item";

export const getItems = () => items;

export const getMaxPage = (items: TypeOfItem[], maxItemsOnPage: number) => {
  const maxPage = Math.ceil(items.length / maxItemsOnPage);
  if (maxPage === 0) {
    return 1;
  }
  return maxPage;
};
