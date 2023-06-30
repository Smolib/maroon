import { useEffect, useState } from "react";
import { TypeOfItem } from "../../types/item";
import Item from "../Item/Item";
import "./CardsSection.scss";
import { getVisibleItems } from "../../utils/filter";

type CardsSectionProps = {
  items: TypeOfItem[];
  page: number;
  maxItemsOnPage: number;
};

function CardsSection({ items, page, maxItemsOnPage }: CardsSectionProps) {
  const [visibleItems, setVisibleItems] = useState<TypeOfItem[]>([]);
  useEffect(() => {
    const newItems = getVisibleItems(items, maxItemsOnPage, page);
    setVisibleItems(newItems);
  }, [items, page, maxItemsOnPage]);
  return (
    <section className="card-section">
      {visibleItems.length === 0 ? (
        <>
          <span className="card-section__empty-text">
            Упс!
            По данным запросам ничего не найдено.</span>
          <span className="card-section__empty-text">
            Попробуйте изменить настройки поиска.
          </span>
        </>
      ) : (
        visibleItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            image={item.image}
            shortDescription={item.shortDescription}
            price={item.price}
            volume={item.volume}
            units={item.units}
          />
        ))
      )}
    </section>
  );
}

export default CardsSection;
