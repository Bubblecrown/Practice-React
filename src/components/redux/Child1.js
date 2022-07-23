import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import * as child1Action from "./../../actions/child1.action";

export default function Child1() {
  // ต้องการให้ component ไหนเข้าถึง reducer อะไรก็ใช้ useSelector
  const appReducer = useSelector(({ appReducer }) => appReducer);
  const child1Reducer = useSelector(({ child1Reducer }) => child1Reducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 onClick={() => dispatch(child1Action.add())}>
        child1: {appReducer.count}
      </h2>
      <p>child1: {child1Reducer.count1}</p>
    </div>
  );
}
