import React from "react";
import ThemeContext from "./ThemeContext";
import UseContextChild from "./UseContextChild";
// ส่งจากแม่มายังลูกโดยไม่ผ่าน prop
// อยากให้ตัวลุกทุกตัวเข้าถึงตัวแปรของตัวแม่ได้เลย
// ตัวแม่ provide context
export default function UseContext() {
  return (
    <div>
      <ThemeContext.Provider value={red}>
        <UseContextChild />
      </ThemeContext.Provider>
    </div>
  );
}
