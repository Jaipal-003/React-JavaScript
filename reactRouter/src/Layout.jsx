import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />  
      <Footer />
    </>
  );
}

export default Layout;
