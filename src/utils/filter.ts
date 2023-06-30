import { TypeOfSettingsFilter } from "../types/filter";
import items from "../mocks/items";
import { TypeOfItem } from "../types/item";

export const filterItems = (filterData: TypeOfSettingsFilter) => {
  const { body, face, skin } = filterData;
  let result = items;
  if (skin.length !== 0) {
    result = result.filter((item) => skin.includes(item.skin));
  }
  if (!(body.length === 0 && face.length === 0)) {
    result = result.filter((item) => {
      if (item.useFor === "body") {
        return body.includes(item.category);
      }
      return face.includes(item.category);
    });
  }
  return result;
};

export const getVisibleItems = (items : TypeOfItem[], maxItemsOnPage: number, page: number) => {
  const start = (page - 1) * maxItemsOnPage;
  const end = start + maxItemsOnPage;
  return items.slice(start, end);
};
