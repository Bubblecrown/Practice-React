import { combineReducers } from "redux";
import appReducer from "./app.reducer";
import child1Reducer from "./child1.reducer";

// appReducer ในที่นี้เป็นทั้ง key และ value -- appReducer:appReducer
// ถ้ามีหลาย reducer ก็ {appReducer}, ...

// redeucer มีได้มากกว่า 1 ตัวจึงต้องมีการ provide combineReducers ที่ใช่ในการ combine ทุกๆ reducer หรือทุกๆ subState ของทุกๆ component

export default combineReducers({ appReducer, child1Reducer });
