import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Report from "./components/Report";

function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/React/reactjs_login_registration/api/product.php")
      .then((res) => {
        setProduct(res.data.item.product);
        // console.log(res.data.item.product);
      });
  });
  // const [product, setProduct] = useState([
  //   {
  //     url: "https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
  //     name: "TRQ White Shoes",
  //     category: "Shoes",
  //     seller: "AMZ Seller Ghz",
  //     price: 1999,
  //   },
  //   {
  //     url: "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg",
  //     name: "LOREM Watch Black",
  //     category: "Watches",
  //     seller: "Watch Ltd Siyana",
  //     price: 2599,
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU",
  //     name: "AMZ Laptop 8GB RAM",
  //     category: "Laptops",
  //     seller: "Delhi Laptops",
  //     price: 50000,
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU",
  //     name: "Security Camera",
  //     category: "CCTV",
  //     seller: "Camron LTD",
  //     price: 4000,
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU",
  //     name: "Watch Pink",
  //     category: "Watches",
  //     seller: "Watch Ltd",
  //     price: 2000,
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU",
  //     name: "Cup red Color",
  //     category: "Cup",
  //     seller: "ABS Ltd",
  //     price: 100,
  //   },
  // ]);

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
    <div>
      <Header
        count={cart.length}
        handleShow={handleShow}
        reportShow={reportShow}
      ></Header>
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              showCart ? (
                <CartList cart={cart}></CartList>
              ) : (
                <ProductList
                  product={product}
                  addToCart={addToCart}
                ></ProductList>
              )
            }
          />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
