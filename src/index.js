import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {App} from './App';
// import {GitPromise} from './GitPromise';
// import { UseRefTest } from './UseRefTest';
import {UseStateTst} from './UseStateTest';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <GitPromise /> */}
    {/* <UseRefTest /> */}
    <UseStateTst />
  </React.StrictMode>,
  document.getElementById('root')
);
