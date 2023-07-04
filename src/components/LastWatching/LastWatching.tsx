import SwiperSection from "../SwiperSection/SwiperSection";
import items from "../../mocks/items";

function LastWatching() {
  return <SwiperSection title={"Вы недавно смотрели"} items={items} />;
}

export default LastWatching;
