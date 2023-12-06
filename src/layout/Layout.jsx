import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navbar />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);

export default Layout;
