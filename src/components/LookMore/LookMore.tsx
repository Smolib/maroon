import { getItems } from "../../utils/catalog";
import SwiperSection from "../SwiperSection/SwiperSection";

function LastWatching() {
  const items = getItems();
  return <SwiperSection title={"Вам также может понравиться"} items={items} />;
}

export default LastWatching;
