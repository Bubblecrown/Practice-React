import React, { useState } from "react";
import "./components/styleComponents/style.css";
import FromComponent from "./components/hooks/FromComponent";
import CountComponent from "./components/hooks/CountComponent";
import UseEffect from "./components/hooks/UseEffect";
import UseEffectInterval from "./components/hooks/UseEffectInterval";
import UseEffectFeedJson from "./components/hooks/UseEffectFeedJson";
import UseContext from "./components/hooks/UseContext";
import UseMemo from "./components/hooks/UseMemo";
import UseCallBack from "./components/hooks/UseCallBack";

export default () => {
  return (
    <div>
      <div className="container">
        {/* <UseContext /> */}
        {/* <UseMemo /> */}
        <UseCallBack />
      </div>
    </div>
  );
};
