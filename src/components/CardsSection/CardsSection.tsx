import { useEffect, useState } from "react";
import { TypeOfItem } from "../../types/item";
import Item from "../Item/Item";
import "./CardsSection.scss";
import { getVisibleItems } from "../../utils/filter";

type CardsSectionProps = {
  items: TypeOfItem[];
  page: number;
  maxItemsOnPage: number;
  emptyText: string[];
};

function CardsSection({
  items,
  page,
  maxItemsOnPage,
  emptyText,
}: CardsSectionProps) {
  const [visibleItems, setVisibleItems] = useState<TypeOfItem[]>([]);
  useEffect(() => {
    const newItems = getVisibleItems(items, maxItemsOnPage, page);
    setVisibleItems(newItems);
  }, [items, page, maxItemsOnPage]);
  return (
    <section className="card-section">
      {visibleItems.length === 0 ? (
        <>
          {emptyText.map((text, i) => (
            <span key={i} className="card-section__empty-text">
              {text}
            </span>
          ))}
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
