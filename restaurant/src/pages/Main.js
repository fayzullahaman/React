import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function Main() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/React/restaurant/restaurantApi/allmenu.php")
      .then((res) => {
        setMenu(res.data.datas.menus);
        console.log(res.data.datas.menus);
      });
  });

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  const reportShow = () => {
    // setShowCart(value);
    alert("Will add any Component");
  };

  return (
    <>
      <Header
        count={cart.length}
        handleShow={handleShow}
        reportShow={reportShow}
      />
      <Outlet />
      <Footer />
    </>
  );
}
