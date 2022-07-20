import React, {useContext} from "react";
import ThemeContext from "./ThemeContext";
export default function UseContextChild() {
  // การดึงข้อมูลเอามาใช้สามารถใช้ useContext -- หรือจะใช้ useEffect ก็ได้
  const box = useContext(ThemeContext)
  return (
    <div>
      <ThemeContext.Consumer>
        {(color) => (
          <h1 style={{color:color}}>{color}</h1>
        )}
      </ThemeContext.Consumer>
      <p>การดึงข้อมูล {box}</p> 
    </div>
  );
}
