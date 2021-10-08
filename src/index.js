import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import {App} from './App';
// import {GitPromise} from './GitPromise';
// import { UseRefTest } from './UseRefTest';
// import {UseStateTst} from './UseStateTest';
// import { FunctionUseState, ClassThisState } from "./UseEffectTest";
//import {UseReducerTest, UseReducerTest2} from "./UseReducerTest";
//import { UseReduserCounter } from "./UseReduserCounter";
import { RunCalc } from "./ABC";

ReactDOM.render(
  <React.StrictMode>
    <div className="flexcontainer">
      <div className="flexinner">
        {/* <App /> */}
        {/* <GitPromise /> */}
        {/* <UseRefTest /> */}
        {/* <UseStateTst /> */}
        {/* <FunctionUseState /><ClassThisState /> */}
        {/* <UseReducerTest /><UseReducerTest2 /> */}
        {/* <UseReduserCounter /> */}
        <RunCalc />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
