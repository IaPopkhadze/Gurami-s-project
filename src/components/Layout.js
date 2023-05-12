import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import Navigation from "./Navigation";
const Layout = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <HamburgerMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
