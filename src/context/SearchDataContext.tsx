import { createContext } from "react";
import { TypeOfSeacrhContext } from "../types/filter";

const SearchDataContext = createContext<TypeOfSeacrhContext>({
  searchData: { body: [], face: [], skin: [] },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSearchData: () => {},
});

export default SearchDataContext;
