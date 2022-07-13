import React, { useState } from "react";
import HelloComponent from "./components/HelloComponent";
import "./components/styleComponents/style.css";
export default () => {
  let numBox = 0;
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="container">
        <HelloComponent img="/logo512.png" />
        <h1>Count : {count} </h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Change
        </button>
      </div>
    </div>
  );
};
