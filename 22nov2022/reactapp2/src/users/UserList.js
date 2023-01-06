import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    alluser();
  }, []);

  const [isuser, setuser] = useState([]);
  const alluser = async (ids) => {
    try {
      axios.get(`http://localhost/reactApi/users.php`).then((res) => {
        // console.log(res.data.userlist.userdata);
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
    <div className="col-sm-8">
      <h2 className="bg-dark text-light">All Users List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isuser.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Link
                  to={`edit/${item.id}`}
                  className="btn btn-outline-primary"
                >
                  {" "}
                  Edit{" "}
                </Link>
                <span
                  onClick={() => deleteConfirm(item.id)}
                  className="btn btn-outline-danger mx-2"
                >
                  {" "}
                  Delete{" "}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/insert" className="btn btn-info btn-sm">
        Create New User
      </Link>
    </div>
  );
};

export default UserList;
