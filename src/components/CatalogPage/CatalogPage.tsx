import "./CatalogPage.scss";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import MapSection from "../MapSection/MapSection";
import Catalog from "./Catalog/Catalog";

function CatalogPage() {
  return (
    <>
      <Catalog/>
      {/* <LastWatching /> */}
      <SubscribeSection />
      <MapSection />
    </>
  );
}

export default CatalogPage;
