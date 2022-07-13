import React, { useState } from "react";
import "./components/styleComponents/style.css";
export default () => {
  let numBox = 0;
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="container">
        <img src="/logo512.png" alt="" />
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
