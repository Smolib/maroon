import "./NewCollectionSection.scss";

function NewCollectionSection() {
  return (
    <section className="new-collection">
      <div className="new-collection__wrapper">
        <h2 className="new-collection__title">
          Встречайте весну вместе с нами
        </h2>
        <p className="new-collection__text">
          Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой
        </p>
        <button className="new-collection__button">Подробнее</button>
      </div>
    </section>
  );
}

export default NewCollectionSection;
