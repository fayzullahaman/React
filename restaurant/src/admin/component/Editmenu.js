import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Editmenu = () => {
  const params = useParams();
  const naviGator = useNavigate();
  const [menu, setMenu] = useState([]);

  console.log(menu);

  const submitValue = (e) => {
    e.preventDefault();
    menuSubmit();
  };

  const menuSubmit = () =>
    axios
      .post("http://localhost/restaurantApi/editmenu.php", {
        id: menu.id,
        name: menu.name,
        price: menu.price,
        details: menu.details,
        image: menu.image,
      })
      .then((res) => {
        naviGator("/allmenu");
        // console.log(res.data);
      });

  useEffect(() => {
    menuOne(params.mid);
    // console.log(params.pid);
  }, []);
  //   console.log("MyID:" + params.pid);

  const changeValue = (e) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  const menuOne = (id) => {
    axios
      .post("http://localhost/restaurantApi/getmenu.php", {
        muid: id,
      })
      .then((res) => {
        setMenu(res.data.menu.mudata[]);
        // console.log(res.data.menu.mudata);
      });
    // .catch((error) => console.log(error));
  };
  return (
    <>
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
                    <label className="fw-bold">Menu Name</label>
                    <input
                      type="text"
                      name="name"
                      value={menu.name}
                      onChange={changeValue}
                      placeholder="Enter Product Name"
                      className="form-control"
                    />

                    <label className="fw-bold">Menu Details</label>
                    <textarea
                      type="text"
                      name="details"
                      value={menu.details}
                      onChange={changeValue}
                      className="form-control"
                      placeholder="Enter Menu Details"
                    ></textarea>

                    <label className="fw-bold">Menu Price</label>
                    <input
                      type="text"
                      name="price"
                      value={menu.price}
                      onChange={changeValue}
                      placeholder="Enter Menu Price"
                      className="form-control"
                    />
                    <label className="fw-bold">Menu Image</label>
                    <input
                      type="file"
                      name="image"
                      value={menu.image}
                      onChange={changeValue}
                      className="form-control"
                    />
                    <br />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editmenu;
