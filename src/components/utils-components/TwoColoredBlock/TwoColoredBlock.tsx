import "./TwoColoredBlock.scss";

type TwoColoredBlockProps = {
  children: [JSX.Element, JSX.Element],
}

function TwoColoredBlock({ children }: TwoColoredBlockProps) {
  return (
    <section className="two-colored-block">
      <div className="two-colored-block__wrapper">
        <div className="two-colored-block__colored-area">{children[0]}</div>
        <div className="two-colored-block__non-colored-area">{children[1]}</div>
      </div>
    </section>
  );
}

export default TwoColoredBlock;
