import React, { useState } from "react";
import "./components/styleComponents/style.css";
import Child1 from "./components/redux/Child1";
import Child2 from "./components/redux/Child2";
import Child3 from "./components/redux/Child3";

export default () => {
  // LocalState
  // const [count, setCount] = useState(0)
  return (
    <div>
      <div className="container">
        <h1>Redux hooks: </h1>
        <Child1 />
        <Child2 />
        <Child3 />
      </div>
    </div>
  );
};
