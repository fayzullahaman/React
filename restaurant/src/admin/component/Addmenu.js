import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Addmenu = () => {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      navigate("/admin_log");
    }
  });

  const [menuInfo, menuinfoSet] = useState({
    name: "",
    details: "",
    price: "",
    image: "",
  });

  const onChangeValue = (e) => {
    menuinfoSet({ ...menuInfo, [e.target.name]: e.target.value });
  };

  const SubmitValue = async (e) => {
    // alert("Submitted");
    e.preventDefault();
    e.persist();
    axios
      .post("http://localhost/React/restaurant/restaurantApi/addmenu.php", {
        name: menuInfo.name,
        details: menuInfo.details,
        price: menuInfo.price,
        image: menuInfo.image,
      })
      .then((result) => {
        alert(result.data.msg);
        navigate("/allmenu");
      });
  };

  return (
    <>
      <div className="col-sm-10">
        <br />
        <div className="content-wrapper">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Add New Menu</h3>
            </div>

            <div className="card-body">
              <div className="container">
                <form className="insertproduct" onSubmit={SubmitValue}>
                  <div className="form-group">
                    <label className="fw-bold">Menu Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={onChangeValue}
                      placeholder="Enter Product Name"
                      className="form-control"
                    />

                    <label className="fw-bold">Menu Details</label>
                    <textarea
                      type="text"
                      name="details"
                      onChange={onChangeValue}
                      className="form-control"
                      placeholder="Enter Menu Details"
                    ></textarea>

                    <label className="fw-bold">Menu Price</label>
                    <input
                      type="text"
                      name="price"
                      onChange={onChangeValue}
                      placeholder="Enter Menu Price"
                      className="form-control"
                    />
                    <label className="fw-bold">Menu Image</label>
                    <input
                      type="file"
                      name="image"
                      onChange={onChangeValue}
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

export default Addmenu;
