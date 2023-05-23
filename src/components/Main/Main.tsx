import "./Main.scss";
import IntroSection from "./IntroSection/IntroSection";
import BestSellersSection from "./BestSellersSection/BestSellersSection";
import NewCollectionSection from "./NewCollectionSection/NewCollectionSection";
import FillFormSection from "./FillFormSection/FillFormSection";
import OurHistorySection from "./OurHistorySection/OurHistorySection";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import MapSection from "../MapSection/MapSection";

function Main() {
  return (
    <main className="main">
      <IntroSection />
      <BestSellersSection />
      <NewCollectionSection />
      <FillFormSection />
      <OurHistorySection />
      <SubscribeSection />
      <MapSection />
    </main>
  );
}

export default Main;
