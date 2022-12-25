import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";
import "./App.css";
import Nav from "./layouts/nav/Nav";
import Loading from "./components/Ui/loading/Loading";

const Sidebar = lazy(() => import("./layouts/sidebar/Sidebar"));
const AddProduct = lazy(() => import("./pages/addProduct/AddProduct"));
const News = lazy(() => import("./pages/news/News"));
const Partners = lazy(() => import("./pages/partners/Partners"));
const Products = lazy(() => import("./pages/products/Products"));
//w-9/12 md:w-9/12 lg:w-11/12
function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div className={`${i18n.language === "ar" && "font-cairo"}`}>
      <Suspense fallback={<Loading />}>
        <Router>
          <Sidebar />
          <div
            className={` min-h-[100vh]  ${
              i18n.language === "en" ? "ml-auto " : "mr-auto "
            }`}
          >
            <Routes>
              <Route element={<Nav />}>
                <Route path="/" element={<Products />} index />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/news" element={<News />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
