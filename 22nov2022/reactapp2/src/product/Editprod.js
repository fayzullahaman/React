import { useState, useEffect, useParams } from "react";
import axios from "axios";

const Editprod = () => {
  const params = useParams();

  useEffect(() => {
    productone(params.pid);
  });
  //   console.log("MyID:" + params.pid);
  const productone = (id) =>
    axios.get("http://localhost/reactApi/getproducts.php", {
      prid: id,
    });

  return (
    <div className="col-sm-8">
      <h2 className="bg-dark text-light">Edit Product</h2>
      <form>
        <label className="form-group fw-bold">Product Name</label>
        <input
          type="text"
          placeholder="Enter Product Name"
          name="pname"
          className="form-control"
        />
        <label className="form-group fw-bold">Product Details</label>
        <textarea
          type="text"
          placeholder="Enter Product Details"
          name="pdetails"
          className="form-control"
        ></textarea>
        <label className="form-group fw-bold">Product Price</label>
        <input
          type="text"
          placeholder="Enter Product Price"
          name="pprice"
          className="form-control"
        />
      </form>
    </div>
  );
};

export default Editprod;
