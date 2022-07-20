import React, { useState } from "react";
import "./components/styleComponents/style.css";
import Child1 from "./components/redux/Child1";
import Child2 from "./components/redux/Child2";
import Child3 from "./components/redux/Child3";

export default () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className="container">
        <h1 onClick={() => setCount(prev => prev + 1)}>Redux hooks: {count}</h1>
        <Child1 />
        <Child2 />
        <Child3 />
      </div>
    </div>
  );
};
