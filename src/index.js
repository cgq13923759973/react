/*
 * @Author: your name
 * @Date: 2019-09-11 00:03:45
 * @LastEditTime: 2019-11-24 19:38:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \React-project\react-project\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div>
    <App name="父组件传值子组件" />
  </div>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
