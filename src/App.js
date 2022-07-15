import React, { useState } from "react";
import "./components/styleComponents/style.css";
import FromComponent from "./components/FromComponent";
import CountComponent from "./components/CountComponent";
import UseEffect from "./components/UseEffect";

export default () => {
  const [isShow, setIsshow] = useState(true);

  return (
    <div>
      <div className="container">
        {isShow && <UseEffect />}

        <button onClick={() => setIsshow(false)}>Delete</button>
      </div>
    </div>
  );
};
