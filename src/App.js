import React, { useState } from "react";
import "./components/styleComponents/style.css";
import FromComponent from "./components/FromComponent";
import CountComponent from "./components/CountComponent";
import UseEffect from "./components/UseEffect";
import UseEffectInterval from "./components/UseEffectInterval";
import UseEffectFeedJson from "./components/UseEffectFeedJson";
import UseContext from "./components/UseContext";
import UseMemo from "./components/UseMemo";

export default () => {

  return (
    <div>
      <div className="container">
        {/* <UseContext /> */}
        <UseMemo />
      </div>
    </div>
  );
};
