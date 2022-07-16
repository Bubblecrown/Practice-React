import React from "react";
import ThemeContext from "./ThemeContext";
export default function UseContextChild() {
  return (
    <div>
      <ThemeContext.Consumer>
        {(color) => (
          <h1 style={{color:color}}>{color}</h1>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}
