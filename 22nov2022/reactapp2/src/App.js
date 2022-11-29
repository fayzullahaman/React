import { Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/Header";
import Navber from "./navber/Navber";
import Footer from "./footer/Footer";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Header
        brand="The Computers Limited"
        slogan="User Computer in best way"
      />
      <Navber />
      <div className="container mt-5">
        <div className="row">
          <Sidebar />
          <Outlet />
        </div>
      </div>

      <Footer copyright="Copyright (c) all rights reserved 2022" />
    </>
  );
}

export default App;
