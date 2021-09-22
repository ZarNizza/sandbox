import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import {App} from './App';
// import {GitPromise} from './GitPromise';
// import { UseRefTest } from './UseRefTest';
// import {UseStateTst} from './UseStateTest';
// import { FunctionUseState, ClassThisState } from "./UseEffectTest";
import {UseReducerTest, UseReducerTest2} from "./UseReducerTest";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <GitPromise /> */}
    {/* <UseRefTest /> */}
    {/* <UseStateTst /> */}
    {/* <FunctionUseState />
    <ClassThisState /> */}
    <UseReducerTest />
    <UseReducerTest2 />
  </React.StrictMode>,
  document.getElementById("root")
);
