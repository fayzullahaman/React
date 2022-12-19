import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Editmenu = () => {
  let naviGate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      naviGate("/admin_log");
    }
  });

  const params = useParams();
  const [menu, setMenu] = useState([]);
  const [image, setImage] = useState({
    file: "",
  });

  const submitValue = (e) => {
    e.preventDefault();
    menuSubmit();
  };

  const menuSubmit = () => {
    axios
      .post("http://localhost/React/restaurant/restaurantApi/editmenu.php", {
        id: menu.id,
        name: menu.name,
        details: menu.details,
        price: menu.price,
        category: menu.category,
        image: menu.image,
      })
      .then((res) => {
        naviGate("/admin/allmenu");
        alert(res.data.msg);
        // console.log(res.data);
      });
  };
  // console.log(item);

  useEffect(() => {
    menuOne(params.id);
  }, []);
  // console.log("MyID:" + params.id);

  const changeImage = (e) => {
    setImage({ file: e.target.files[0] });
  };

  const changeValue = (e) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  const menuOne = async (id) => {
    axios
      .post("http://localhost/React/restaurant/restaurantApi/getmenu.php", {
        muid: id,
      })
      .then((res) => {
        setMenu(res.data.items.mudata);
        // console.log(res.data.items.mudata);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="col-sm-10">
      <br />
      <div className="content-wrapper">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Edit Menu</h3>
          </div>
          <div className="card-body">
            <div className="container">
              <form onSubmit={submitValue} className="insertproduct">
                <div className="form-group">
                  <label className="fw-bold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={menu.name}
                    onChange={changeValue}
                    className="form-control"
                  />

                  <label className="fw-bold">Details</label>
                  <textarea
                    type="text"
                    name="details"
                    value={menu.details}
                    onChange={changeValue}
                    className="form-control"
                  ></textarea>

                  <label className="fw-bold">Price</label>
                  <input
                    type="text"
                    name="price"
                    value={menu.price}
                    onChange={changeValue}
                    className="form-control"
                  />

                  <label className="fw-bold">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={menu.category}
                    onChange={changeValue}
                    className="form-control"
                  />

                  <label className="fw-bold">Image</label>
                  <input
                    type="file"
                    name="image"
                    value={menu.image}
                    onChange={changeImage}
                    className="form-control"
                  />
                  <br />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editmenu;
