import React, { useState } from "react";

const Use_state = () => {
  const [value, setValue] = useState(0);
  // using useState to add or reduce value (0)
  const add = () => {
    setValue(value + 1);
  };
  const reduce = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "80px" }}
      >
        Learn Use State
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "80px" }}
      >
        {value}
      </div>
      <div
        className="mt-10"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          onClick={add}
          style={{
            border: "10px",
            marginRight: "10px",
            fontSize: "30px",
          }}
        >
          Add value
        </button>
        <button
          onClick={reduce}
          style={{
            border: "10px",
            marginRight: "10px",
            fontSize: "30px",
          }}
        >
          Reduce value
        </button>
      </div>
    </div>
  );
};

export default Use_state;
