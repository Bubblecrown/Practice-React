import React, { useState } from "react";
import "./components/styleComponents/style.css";
import FromComponent from "./components/FromComponent";
import CountComponent from "./components/CountComponent";
import UseEffect from "./components/UseEffect";
import UseEffectInterval from "./components/UseEffectInterval";

export default () => {

  return (
    <div>
      <div className="container">
        <UseEffectInterval />
      </div>
    </div>
  );
};
