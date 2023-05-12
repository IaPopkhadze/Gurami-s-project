import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import HamburgerMenu from "./components/HamburgerMenu";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Shop from "./components/Shop";
import ShopCart from "./components/ShopCart";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
