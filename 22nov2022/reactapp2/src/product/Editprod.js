import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Editprod = () => {
  const params = useParams();
  const naviGator = useNavigate();
  const [product, setProduct] = useState([]);

  console.log(product);

  const submitValue = (e) => {
    e.preventDefault();
    productSubmit();
  };

  const productSubmit = () =>
    axios
      .post("http://localhost/reactApi/editproduct.php", {
        prid: product.id,
        prname: product.name,
        prprice: product.price,
        prdet: product.details,
      })
      .then((res) => {
        naviGator("/products");
        // console.log(res.data);
      });

  useEffect(() => {
    productOne(params.pid);
    // console.log(params.pid);
  }, []);
  //   console.log("MyID:" + params.pid);

  const changeValue = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const productOne = (id) => {
    axios
      .post("http://localhost/reactApi/getproducts.php", {
        prid: id,
      })
      .then((res) => {
        setProduct(res.data.product);
        // console.log(res.data.product.prdata);
      });
    // .catch((error) => console.log(error));
  };
  return (
    <div className="col-sm-8">
      <h2 className="bg-dark text-light">Edit Product</h2>
      <form onSubmit={submitValue}>
        <label className="form-group fw-bold">Product Name</label>
        <input
          type="text"
          placeholder="Enter Product Name"
          name="name"
          value={product.name}
          onChange={changeValue}
          className="form-control"
        />
        <label className="form-group fw-bold">Product Details</label>
        <textarea
          type="text"
          placeholder="Enter Product Details"
          name="details"
          value={product.details}
          onChange={changeValue}
          className="form-control"
        ></textarea>
        <label className="form-group fw-bold">Product Price</label>
        <input
          type="text"
          placeholder="Enter Product Price"
          name="price"
          value={product.price}
          onChange={changeValue}
          className="form-control"
        />
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editprod;
