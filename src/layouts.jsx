import React from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

const Layouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layouts;
