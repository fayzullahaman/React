import React from "react";

// Element
const myElement = React.createElement("p", {}, "I do not use JSX!");

// Variable
let x = "This is a line";

// Array
const flowers = ["Rose", "Wate4rlily", "Belly", "Sunflower"];

// Function
const greetings = (name) => {
  return name + "! Good Afternoon";
};

const person = {
  name: "Aaman",
  phone: 880123456,
  address: "Badda",
};

const inputElement = <input type="text" name="fullname" />;

export { myElement, flowers, greetings, x, inputElement };

export default person;
