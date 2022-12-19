import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Editproduct = () => {
  const params = useParams();
  const naviGator = useNavigate();
  const [product, setProduct] = useState([]);

  console.log(product);

  // Update Product
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
        prdetails: product.details,
      })
      .then((res) => {
        naviGator("/products");
        // console.log(res.data);
      });

  // Update Product

  useEffect(() => {
    productone(params.pid);
  }, []);
  // console.log("MyID:" + params.pid);
  const changeValue = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const productone = async (id) => {
    axios
      .post("http://localhost/reactApi/getproducts.php", { prid: id })
      .then((res) => {
        setProduct(res.data.items.prdata);
        //   console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="col-sm-8">
      <h1>Edit Product</h1>
      <form 
      // onSubmit={submitValue}
      >
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            // onChange={changeValue}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product Details</label>
          <textarea
            className="form-control"
            name="details"
            value={product.details}
            // onChange={changeValue}
            type="text"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input
            type="text"
            className="form-control"
            // onChange={changeValue}
            name="price"
            value={product.price}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default Editproduct;
