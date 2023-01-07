import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Nav from "./layouts/nav/Nav";
import Loading from "./components/Ui/loading/Loading";
import AddNews from "./pages/addNews/AddNews";
import AddPartner from "./pages/addPartner/AddPartner";

const Sidebar = lazy(() => import("./layouts/sidebar/Sidebar"));
const AddProduct = lazy(() => import("./pages/addProduct/AddProduct"));
const News = lazy(() => import("./pages/news/News"));
const Partners = lazy(() => import("./pages/partners/Partners"));
const Products = lazy(() => import("./pages/products/Products"));

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div className={`${i18n.language === "ar" && "font-cairo"}`}>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route element={<Sidebar />}>
              <Route element={<Nav />}>
                <Route path="/" element={<Products />} index />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/news" element={<News />} />
                <Route path="/addNews" element={<AddNews />} />
                <Route path="/addPartner" element={<AddPartner />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
