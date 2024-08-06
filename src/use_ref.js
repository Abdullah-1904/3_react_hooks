import React, { useEffect, useRef, useState } from "react";

const Learning = () => {
  const [first, setfirst] = useState(0);
  let firstref = useRef(1);

  useEffect(() => {
    console.log("Rendered");
  });

  const add = () => {
    // add will not render the page but will update the value
    firstref.current = firstref.current + 1;
    console.log(firstref);
  };
  const remove = () => {
    // remove will  render the page and will update the value
    setfirst(first - 1);
  };

  return (
    <div>
      <p className="m-3">{first}</p>
      <button className="p-3 mt-2 mr-3" onClick={add}>
        add
      </button>
      <button onClick={remove}>subtract</button>
    </div>
  );
};

export default Learning;
