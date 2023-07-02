import { TypeOfItem } from "../../types/item";
import Item from "../Item/Item";
import "./CardsSection.scss";

type CardsSectionProps = {
  items: TypeOfItem[];
  emptyText: string[];
};

function CardsSection({
  items,
  emptyText,
}: CardsSectionProps) {
  return (
    <section className="card-section">
      {items.length === 0 ? (
        <>
          {emptyText.map((text, i) => (
            <span key={i} className="card-section__empty-text">
              {text}
            </span>
          ))}
        </>
      ) : (
        items.map((item) => (
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
