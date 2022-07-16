import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import UseContextChild from "./UseContextChild";
// ส่งจากแม่มายังลูกโดยไม่ผ่าน prop
// อยากให้ตัวลุกทุกตัวเข้าถึงตัวแปรของตัวแม่ได้เลย
// ตัวแม่ provide context
export default function UseContext() {
  let [color, setColor] = useState({ box: "" });
  let check = false;
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor({ box: e.target.value }, console.log(color.box));
        }}
      />
      <button
        onClick={() => {
          check = true;
        }}
      >
        Show
      </button>
      <h1>{JSON.stringify(color.box)}</h1>
      <ThemeContext.Provider value={color.box}>
        <UseContextChild />
      </ThemeContext.Provider>
    </div>
  );
}
