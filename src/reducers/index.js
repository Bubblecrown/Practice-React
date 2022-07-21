import { combineReducers } from "redux";
import appReducer from "./app.reducer";
// appReducer ในที่นี้เป็นทั้ง key และ value -- appReducer:appReducer
// ถ้ามีหลาย reducer ก็ {appReducer}, ...
export default combineReducers({ appReducer });
