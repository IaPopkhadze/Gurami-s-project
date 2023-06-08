import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Shop from "./components/Shop";
import ShopCart from "./components/ShopCart";
import Layout from "./components/Layout";
import Admin from "./components/Admin";

import "../node_modules/bpg-arial-caps/css/bpg-arial-caps.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopcart" element={<ShopCart />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
