import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

export default function MyModal() {
  const [info, setInfo] = useState({
    modal: false,
    name: "",
    city: "",
  });

  const toggle = () => {
    setInfo({ modal: !info.modal });
  };

  const changeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(info);
    toggle();
    dataSubmit();
  };

  const dataSubmit = async () => {
    axios
      .post("http://localhost/reactApi/modalApi/post.php", { info })
      .then((res) => {
        alert(res.data.msg);
      });
  };
  return (
    <div>
      <h1>This is my Modal</h1>
      <button onClick={toggle} className="btn btn-success">
        Click Here
      </button>
      <Modal isOpen={info.modal}>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Hello, This is Modal</ModalHeader>
          <ModalBody>
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              onChange={changeValue}
              name="name"
              placeholder="Enter your Name"
            />
            <label>City</label>
            <input
              type="text"
              className="form-control"
              onChange={changeValue}
              name="city"
              placeholder="Enter your City"
            />
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" className="btn btn-info" />
            <Button onClick={toggle} className="btn btn-danger">
              Close
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
