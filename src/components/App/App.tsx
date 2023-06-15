import { Route, Routes } from "react-router-dom";
import { AppRoute } from "../../utils/consts";
import Main from "../Main/Main";
import HistoryRouter from "../utils-components/HistoryRoute/HistoryRoute";
import Layout from "../Layout/Layout";
import ScrollToTop from "../utils-components/ScrollToTop/ScrollToTop";
import browserHistory from "../../utils/browser-history";
import Catalog from "../Catalog/Catalog";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <HistoryRouter history={browserHistory} basename={""}>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Catalog} element={<Catalog />} />
          <Route path={AppRoute.Item} element={<Main />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
