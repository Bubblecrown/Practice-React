import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import UseContextChild from "./UseContextChild";
// ส่งจากแม่มายังลูกโดยไม่ผ่าน prop
// อยากให้ตัวลูกทุกตัวเข้าถึงตัวแปรของตัวแม่ได้เลย
// ตัวแม่ provide context
export default function UseContext() {
  let [color, setColor] = useState({ box: "" });
  // let check = [false];
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor({ box: e.target.value }, console.log(color.box));
        }}
      />
      {/* <button
        onClick={() => {
          check[0] == true ? (check[0] = false) : (check[0] = true);
          console.log(check[0]);
        }}
      >
        Show
      </button> */}
      <h1>#Debug: {JSON.stringify(color.box)}</h1>
      <ThemeContext.Provider value={color.box}>
        <UseContextChild />
      </ThemeContext.Provider>
    </div>
  );
}
