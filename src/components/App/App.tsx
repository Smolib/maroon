import { Route, Routes } from "react-router-dom";
import { AppRoute } from "../../utils/consts";
import Main from "../Main/Main";
import HistoryRouter from "../utils-components/HistoryRoute/HistoryRoute";
import Layout from "../Layout/Layout";
import ScrollToTop from "../utils-components/ScrollToTop/ScrollToTop";
import browserHistory from "../../utils/browser-history";
import CatalogPage from "../CatalogPage/CatalogPage";
import NotFound from "../NotFound/NotFound";
import ItemPage from "../ItemPage/ItemPage";

function App() {
  return (
    <HistoryRouter history={browserHistory} basename={"maroon"}>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Catalog} element={<CatalogPage />} />
          <Route path={`${AppRoute.ItemRoutes}`} element={<ItemPage />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
