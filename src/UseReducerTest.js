import React from "react";
import { useReducer } from "react";

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter( initialCount ) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <div>
      Count: {state.count} &nbsp;
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        {" "}
        Reset to {initialCount}
      </button>&nbsp;
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>&nbsp;
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}


const initialState = {count: 22};

function reducer2(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter2() {
  const [state, dispatch] = useReducer(reducer2, initialState);
  return (
    <div>
      Count: {state.count}&nbsp;
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>&nbsp;
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

export function UseReducerTest() {
  return Counter(11);
}
export function UseReducerTest2() {
  return Counter2();
}
