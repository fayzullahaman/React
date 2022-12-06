import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function MyModal() {
  const [info, setInfo] = useState({
    modal: false,
    name: "",
    city: "",
  });

  function toggle() {
    setInfo({ modal: !info.modal });
  }

  function handleSubmmit(e) {
    e.preventDefault();
    //  console.log(info);
    toggle();
    dataSubmit();
  }

  function changeValue(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function dataSubmit() {
    axios
      .post("http://localhost/React/reactjsbootstrapmodal/api/post.php", {
        info,
      })
      .then((res) => {
        alert(res.data.msg);
        //   console.log(res.data);
      });
  }

  return (
    <div>
      <h1>My Modal Button</h1>
      <button onClick={toggle}>Click Here</button>

      <Modal isOpen={info.modal}>
        <form onSubmit={handleSubmmit}>
          <ModalHeader>Hello, This is Modal</ModalHeader>
          <ModalBody>
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={changeValue}
              name="name"
            />
            <label>City:</label>
            <input
              type="text"
              className="form-control"
              onChange={changeValue}
              name="city"
            />
          </ModalBody>
          <ModalFooter>
            <input type="submit" className="btn btn-info" value="SUBMIT" />
            <Button className="btn btn-primary" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
