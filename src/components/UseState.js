import React, { useState } from "react";
import HelloComponent from "./HelloComponent";

export default function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HelloComponent img="/logo512.png" count={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Change
      </button>
    </div>
  );
}
