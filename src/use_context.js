import React, { createContext, useState } from "react";
import Card2 from "./components/Card2";

export const value1 = createContext();
const Use_context = () => {
  // this is syntax of useContext, so value in "first" in useState will be saved in useContext

  const [first, setfirst] = useState("Unknown");
  const change = () => {
    setfirst(first === "Unknown" ? "Abdullah" : "Unknown");
  };
  return (
    <div>
      <button onClick={change}>add new name</button>
      <value1.Provider value={first}>
        {/* this will send the value to the card */}
        <Card2 />
      </value1.Provider>
      <h1 className="mt-10">
        The name "abdullah" and "unknown" are displayed using UseContext and
        createContent hook in card
      </h1>
    </div>
  );
};

export default Use_context;
