import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Allproduct = () => {
  const [product, setProduct] = useState([]);
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
          {product.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.details}</td>
              <td>{item.price}</td>
              <td>
                <Link
                  to={`/product/editprod/${item.id}`}
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
