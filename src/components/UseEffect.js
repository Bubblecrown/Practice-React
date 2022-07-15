import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = "Current count : " + count;
    return () => {
      document.title = "The element was just destroy"
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
			
    </div>
  );
}
