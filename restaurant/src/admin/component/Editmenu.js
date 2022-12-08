import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Editmenu = () => {
  const params = useParams();
  const [menu, setMenu] = useState([]);

  //console.log(menu);

  useEffect(() => {
    menuOne(params.pid);
  });
  //console.log("MyID:" + params.pid);
  const menuOne = (id) => {
    axios
      .post("http://localhost/restaurantApi/getmenu.php", { id: id })
      .then((res) => {
        setMenu(res.data.menu.mudata);
        // console.log(res.data.menu.mudata);
      })
      .catch((error) => console.log(error));
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
                <form
                  // onSubmit={submitValue}
                  className="insertproduct"
                >
                  <div className="form-group">
                    <label className="fw-bold">Menu Name</label>
                    <input
                      type="text"
                      name="name"
                      value={menu.name}
                      onChange={(e) => setMenu(e.target.value)}
                      placeholder="Enter Product Name"
                      className="form-control"
                    />

                    <label className="fw-bold">Menu Details</label>
                    <textarea
                      type="text"
                      name="details"
                      value={menu.details}
                      onChange={(e) => setMenu(e.target.value)}
                      className="form-control"
                      placeholder="Enter Menu Details"
                    ></textarea>

                    <label className="fw-bold">Menu Price</label>
                    <input
                      type="text"
                      name="price"
                      value={menu.price}
                      onChange={(e) => setMenu(e.target.value)}
                      placeholder="Enter Menu Price"
                      className="form-control"
                    />
                    <label className="fw-bold">Menu Image</label>
                    <input
                      type="file"
                      name="image"
                      value={menu.image}
                      onChange={(e) => setMenu(e.target.value)}
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
    </>
  );
};

export default Editmenu;
