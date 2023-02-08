import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Topbar from "../component/Topbar";

export default function Main() {
  return (
    <>
      <Topbar />
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
}
