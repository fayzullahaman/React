import React, { useState } from "react";

const Colors = () => {
  const [color, setColor] = useState("Red");
  return (
    <div className="col-sm-8">
      <h1>My Color is {color}</h1>
      <button className="btn btn-success" onClick={() => setColor("Blue")}>
        BLUE
      </button>
      <button className="btn btn-info mx-2" onClick={() => setColor("Green")}>
        GREEN
      </button>
      <button className="btn btn-danger" onClick={() => setColor("Red")}>
        RED
      </button>
      <br />
    </div>
  );
};

export default Colors;
