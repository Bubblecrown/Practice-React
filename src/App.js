import React, { useState } from "react";
import "./components/styleComponents/style.css";
import Child1 from "./components/redux/Child1";
import Child2 from "./components/redux/Child2";
import Child3 from "./components/redux/Child3";
import { useSelector } from "react-redux/es/exports";
// catch
import * as appActions from "./actions/app.action";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

export default () => {
  // LocalState
  // const [count, setCount] = useState(0)
  // useSelector = การดึง state ที่อยู่ใน redux store มา
  const appReducer = useSelector(({ appReducer }) => appReducer);
  const child1Reducer = useSelector(({ child1Reducer }) => child1Reducer);
  const dispatch = useDispatch();
  // dispatch ดึง action เพื่อไปทำการ update state ของ reducer
  return (
    <div>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button onClick={() => dispatch(appActions.add())}>Add</button>
          <button onClick={() => dispatch(appActions.remove())}>Rem</button>
          <button onClick={() => dispatch(appActions.clear(0))}>Clr</button>
        </div>
      </div>
      <div className="container">
        <h1>Redux hooks: {appReducer.count}, child1: {child1Reducer.count1}</h1>
        <Child1 />
        <Child2 />
        <Child3 />
      </div>
    </div>
  );
};
