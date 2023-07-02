import { useEffect, useState } from "react";
import SearchDataContext from "../../../context/SearchDataContext";
import CardsSection from "../../CardsSection/CardsSection";
import FilterSection from "../FilterSection/FilterSection";
import { FilterDefaultData } from "../../../utils/consts";
import { TypeOfSettingsFilter } from "../../../types/filter";
import { TypeOfItem } from "../../../types/item";
import { getItems, getMaxPage } from "../../../utils/catalog";
import NavigateBlock from "../../NavigateBlock/NavigateBlock";
import { filterItems, getVisibleItems } from "../../../utils/filter";

function Catalog() {
  const maxItemsOnPage = 12;
  const [searchData, setSearchData] = useState<TypeOfSettingsFilter>(FilterDefaultData);
  const [currentItems, setCurrentItems] = useState<TypeOfItem[]>(getItems());
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [visibleItems, setVisibleItems] = useState<TypeOfItem[]>([]);
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

  useEffect(() => {
    const newItems = getVisibleItems(currentItems, maxItemsOnPage, currentPage);
    setVisibleItems(newItems);
  }, [currentItems, maxItemsOnPage, currentPage]);

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
          items={visibleItems}
          emptyText={[
            "Упс! По данным запросам ничего не найдено.",
            "Попробуйте изменить настройки поиска.",
          ]}
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
