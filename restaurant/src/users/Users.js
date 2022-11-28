import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Users() {
  useEffect(() => {
    window.scrollTo(0, 0);
    alluser();
  }, []);
  const [isuser, setuser] = useState([]);
  const alluser = async (ids) => {
    try {
      axios.get(`http://localhost/reactApi/users.php`).then((res) => {
        console.log(res.data.userlist.userdata);
        setuser(res.data.userlist.userdata);
      });
    } catch (error) {
      throw error;
    }
  };

  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteUser(id);
    }
  };
  const deleteUser = async (id) => {
    try {
      axios
        .post(`http://localhost/reactApi/deleteusers.php`, {
          userids: id,
        })
        .then((res) => {
          setuser([]);
          alluser();
          return;
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <h1>User List</h1>
        <Link to="/insert" className="btn btn-info">
          {" "}
          Create User{" "}
        </Link>
        <Link to="/Edit" className="btn btn-info">
          {" "}
          Edit User{" "}
        </Link>
        <table className="table table-striped">
          <tr>
            <th>ID:</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {isuser.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`Edit/${item.id}`} className="btn btn-primary">
                  Edit
                </Link>
                <span
                  onClick={() => deleteConfirm(item.id)}
                  className="btn btn-danger mx-2"
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
