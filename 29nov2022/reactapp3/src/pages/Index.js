import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function Index() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
