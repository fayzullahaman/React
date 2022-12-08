import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Allproduct = () => {
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedProduct = product.filter(
    (pr) =>
      pr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pr.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pr.price.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const mynavi = Navigate();
  console.log(product);
  useEffect(() => {
    allprod();
  }, []);

  const allprod = async () => {
    axios.get("http://localhost/reactApi/allproducts.php").then((res) => {
      setProduct(res.data.datas.pr);
    });
  };

  const delConfirm = (id) => {
    delProd(id);
  };

  const delProd = async (id) => {
    axios
      .post("http://localhost/reactApi/delproduct.php", {
        prodid: id,
      })
      .then((res) => {
        alert(res.data.msg);
        allprod();
      });
  };

  // const newproduct = () => {
  //   return mynavi("/products/new");
  // };

  return (
    <div className="col-sm-8">
      <h2 className="bg-dark text-light">All Products</h2>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        name="searchTerm"
        onChange={handleSearch}
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchedProduct.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.details}</td>
              <td>{item.price}</td>
              <td>
                <Link
                  to={`/product/editproduct/${item.id}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => delConfirm(item.id)}
                  className="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/products/new" className="btn btn-secondary">
        Add New Products
      </Link>
    </div>
  );
};

export default Allproduct;
