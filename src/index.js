import React from "react";
import ReactDOM from "react-dom/client";
import Use_state from "./use_state";
import Use_effect from "./use_effect";
import "./index.css";
import Use_context from "./use_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Use_state />
    {/* <Use_effect /> */}
    {/* <Use_context /> */}
  </React.StrictMode>
);
