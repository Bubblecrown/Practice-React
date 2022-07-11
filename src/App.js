import React, { useState } from "react";

export default () => {
  const testAnd = false;
  let numBox = 0;
  return (
    <div>
      <div>Emmet pass</div>
      <div>{numBox}</div>
      {testAnd ? <div>yes</div> : <div>no</div>}
      <div>{testAnd && "Yes and"}</div>
      <button
        onClick={() => {
          numBox = 10;
        }}
      >
        Change
      </button>
    </div>
  );
};
