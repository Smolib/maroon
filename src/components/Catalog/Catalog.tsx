import "./Catalog.scss";
import { useState } from "react";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import MapSection from "../MapSection/MapSection";
import FilterSection from "./FilterSection/FilterSection";
import { TypeOfSettingsFilter } from "../../types/filter";
import SearchDataContext from "../../context/SearchDataContext";

function Catalog() {
  const [searchData, setSearchData] = useState<TypeOfSettingsFilter>({
    body: [],
    face: [],
    skin: [],
  });

  return (
    <SearchDataContext.Provider value={{ searchData, setSearchData }}>
      <FilterSection />
      {/* <CardsSection />
      <LastWatching /> */}
      <SubscribeSection />
      <MapSection />
    </SearchDataContext.Provider>
  );
}

export default Catalog;
