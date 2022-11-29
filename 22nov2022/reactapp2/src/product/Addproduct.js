import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const navigate = useNavigate();
  const [prodinfo, prodinfoSet] = useState({
    name: "",
    details: "",
    price: "",
  });

  const onChangeValue = (e) => {
    prodinfoSet({ ...prodinfo, [e.target.name]: e.target.value });
  };

  const SubmitValue = async (e) => {
    // alert("Submitted");
    e.preventDefault();
    e.persist();
    axios
      .post("http://localhost/reactApi/addproduct.php", {
        pname: prodinfo.name,
        pdetails: prodinfo.details,
        pprice: prodinfo.price,
      })
      .then((result) => {
        alert(result.data.msg);
        navigate("/products");
      });
  };

  return (
    <>
      <div className="col-sm-8">
        <h2 className="bg-dark text-light">Add New Products</h2>
        <form className="insertproduct" onSubmit={SubmitValue}>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              onChange={onChangeValue}
              placeholder="Enter Product Name"
              className="form-control"
            />

            <label>Product Details</label>
            <textarea
              type="text"
              name="details"
              onChange={onChangeValue}
              className="form-control"
            ></textarea>

            <label>Product Price</label>
            <input
              type="text"
              name="price"
              onChange={onChangeValue}
              placeholder="Enter Product Price"
              className="form-control"
            />
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addproduct;
