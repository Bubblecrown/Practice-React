import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// redux begin
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";
// redux end

// 1. store -- global variable บรรจุ reducer
const store = createStore(reducers, applyMiddleware(thunk, logger));
const ReduxApp = () => {
  return (
    // 2. ยัด store เข้าไปในฐานะ property ในคลาส provider ซึ่งหุ้ม App เอาไว้
    // 3. ทำให้ App รวมถึง subcomponent ทุกตัวสามารถเข้าถึง reducer และตัวแปรภายใน reducer ได้
    <Provider store={store}>
      <App />
    </Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
