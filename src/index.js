import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {App} from './App';
import {GitPromise} from './GitPromise';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <GitPromise />
  </React.StrictMode>,
  document.getElementById('root')
);
