import { createContext } from "react";
import { TypeOfSeacrhContext } from "../types/filter";
import items from "../mocks/items";
import { FilterDefaultData } from "../utils/consts";

const SearchDataContext = createContext<TypeOfSeacrhContext>({
  searchData: FilterDefaultData,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSearchData: () => {},
  currentItems: items,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentItems: () => {},
});

export default SearchDataContext;
