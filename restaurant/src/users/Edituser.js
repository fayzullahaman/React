import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edituser = (props) => {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    userids: props.list.id,
    name: props.list.name,
    email: props.list.email,
    password: props.list.password,
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  // Inserting a new user into the Database.
  const submitUser = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      axios
        .post(`http://localhost/reactApi/editusers.php`, {
          userids: props.list.id,
          username: userInfo.name,
          useremail: userInfo.email,
          password: userInfo.password,
        })
        .then((res) => {
          console.log(res.data);
          navigate(`/users`);
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
      <form className="editForm" onSubmit={submitUser}>
        <h2> Edit Form </h2>
        <label htmlFor="_name">Name</label>
        <input
          type="text"
          id="_name"
          name="name"
          value={userInfo.name}
          onChange={onChangeValue}
          placeholder="Enter name"
          autoComplete="off"
          required
        />
        <br /> <br />
        <label htmlFor="_email">Email</label>
        <input
          type="email"
          id="_email"
          name="email"
          value={userInfo.email}
          onChange={onChangeValue}
          placeholder="Enter email"
          autoComplete="off"
          required
        />
        <br /> <br />
        <label htmlFor="_pass">Password</label>
        <input
          type="password"
          id="_pass"
          name="password"
          value={userInfo.password}
          onChange={onChangeValue}
          placeholder="Enter Password"
          autoComplete="off"
          required
        />
        <br /> <br />
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default Edituser;
