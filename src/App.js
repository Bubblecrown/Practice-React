import React, { useState } from "react";

export default () => {
  const testAnd = false;
  let numBox = 0;
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count} </h1>
      <button
        onClick={() => {
					setCount(count + 1)
			}}
      >
        Change
      </button>
    </div>
  );
};
