import { useEffect, useState } from "react";
import SearchDataContext from "../../../context/SearchDataContext";
import CardsSection from "../../CardsSection/CardsSection";
import FilterSection from "../FilterSection/FilterSection";
import { FilterDefaultData } from "../../../utils/consts";
import { TypeOfSettingsFilter } from "../../../types/filter";
import { TypeOfItem } from "../../../types/item";
import { getItems, getMaxPage } from "../../../utils/catalog";
import NavigateBlock from "../../NavigateBlock/NavigateBlock";
import { filterItems } from "../../../utils/filter";

function Catalog() {
  const maxItemsOnPage = 12;
  const [searchData, setSearchData] = useState<TypeOfSettingsFilter>(FilterDefaultData);
  const [currentItems, setCurrentItems] = useState<TypeOfItem[]>(getItems());
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  useEffect(() => {
    setCurrentItems(filterItems(searchData));
  }, [searchData]);
  useEffect(() => {
    setMaxPage(getMaxPage(currentItems, maxItemsOnPage));
  }, [currentItems, maxItemsOnPage]);
  const handleClickLeftButton = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  };
  const handleClickRightButton = () => {
    if (currentPage === maxPage) {
      return;
    }
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };
  return (
    <SearchDataContext.Provider
      value={{
        searchData,
        setSearchData,
        currentItems,
        setCurrentItems,
      }}
    >
      <section>
        <FilterSection />
        <CardsSection
          items={currentItems}
          page={currentPage}
          maxItemsOnPage={maxItemsOnPage}
        />
        <NavigateBlock
          isSwiper={false}
          onClickLeftButton={handleClickLeftButton}
          onClickRightButton={handleClickRightButton}
          page={currentPage}
          maxPage={maxPage}
        />
      </section>
    </SearchDataContext.Provider>
  );
}

export default Catalog;
