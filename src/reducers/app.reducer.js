// rxreducer
// redeucer มีได้มากกว่า 1 ตัวจึงต้องมีการ provide combineReducers ที่ใช่ในการ combine ทุกๆ reducer หรือทุกๆ subState ของทุกๆ component

import { APP_ACTION_ADD, APP_ACTION_REM, APP_ACTION_CLR } from "../Constants";

// Global State
const initialState = {
  // นิยามตัวแปร
  count: 0,
  box: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // code ตรงนี้จะถูกเรียกจังหวะที่ action มีการส่งมา
    case APP_ACTION_ADD:
      // ...state เอามาหมด
      return { ...state, count: state.count + 1 };
    case APP_ACTION_REM:
      // ...state เอามาหมด
      return { ...state, count: state.count - 1 };
    case APP_ACTION_CLR:
      // ...state เอามาหมด
      return { ...state, count: payload };
    default:
      return state;
  }
};
