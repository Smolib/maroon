import { ReactNode } from "react";
import { TypeOfItem } from "../../types/item";
import Item from "../Item/Item";
import "./CardsSection.scss";

type CardsSectionProps = {
  items: TypeOfItem[];
  emptyText: string[];
  children: ReactNode;
};

function CardsSection({ items, emptyText, children }: CardsSectionProps) {
  return (
    <section className="card-section">
      <div className="card-section__cards-area">
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
              price={item.variants[0].price}
              volume={item.variants[0].volume}
              units={item.units}
              id={item.id}
            />
          ))
        )}
      </div>

      {children}
    </section>
  );
}

export default CardsSection;
