import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Main() {
  return (
    <>
      <div className="container">
        <div className="row g-5">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
