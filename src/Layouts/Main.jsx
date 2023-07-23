import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";

function Main() {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default Main;
