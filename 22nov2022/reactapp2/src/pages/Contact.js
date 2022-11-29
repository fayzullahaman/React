import { useState } from "react";

function Contact() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
    console.log(inputs);
  };

  return (
    <div className="col-sm-8">
      <h2>Contact Us</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={inputs.name}
            onChange={handleChange}
            className="form-control"
            name="name"
            placeholder="Enter Name"
          />
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            value={inputs.email}
            onChange={handleChange}
            name="email"
            placeholder="Enter Email"
          />
          <label>Message</label>
          <input
            type="text"
            className="form-control"
            value={inputs.message}
            onChange={handleChange}
            name="message"
            placeholder="Enter Message"
          />
        </div>
        <br />
        <input
          type="submit"
          className="btn btn-primary"
          value="Send Your Data"
        />
      </form>
      You have submitted: {inputs.name} {inputs.email} {inputs.message}
    </div>
  );
}
export default Contact;
