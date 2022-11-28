import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./home/Home";
import reportWebVitals from "./reportWebVitals";
import About from "./about/About";
import Contact from "./contact/Contact";
import Menu from "./menu/Menu";
import Event from "./event/Event";
import Users from "./users/Users";
import Edit from "./users/Edit";
import Edituser from "./users/Edituser";
import Insert from "./users/Insert";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/event" element={<Event />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/edit/:ids" element={<Edit />} />
          <Route path="/insert" element={<Insert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);

reportWebVitals();
