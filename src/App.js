import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menu } from "./Components/Menu";
import { Shop } from "./Pages/Shop";
import { Single_Product } from "./Pages/Single_Product";
import { CategoryProducts } from "./Pages/CategoryProducts";
import { ViewProductDetails } from "./Components/ViewProductDetails";
import { Cart } from "./Pages/Cart";
import LoaderWrapper from "./LoaderWrapper";
function App() {
  return (
    <BrowserRouter>
      <LoaderWrapper />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/category-products/:did"
          element={<CategoryProducts />}
        ></Route>
        <Route path="/view/:rid" element={<ViewProductDetails />}></Route>
        <Route path="/single-product/:uid" element={<Single_Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
