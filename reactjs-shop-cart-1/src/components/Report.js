import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Report() {
  const [report, setReport] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost/React/reactjs-shop-cart/api/sales.php")
      .then((res) => {
        // console.log(res.data.item.orders);
        setReport(res.data.item.orders);
      });
  }, []);
  return (
    <div>
      <h1>Report System</h1>
    </div>
  );
}
