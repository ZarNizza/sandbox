import { useReducer } from "react";
import { useEffect } from "react/cjs/react.development";

export function UseReduserCounter () {
const [state, dispatch] = useReducer(reduser, {count: 0,});
const count = state.count;

useEffect( () => {
    const id= setInterval(() => {dispatch({type:"plus"})}, 1000);
    return () => clearInterval(id);
}, []);

return (
    <>
    <h2>Counter = {count} </h2>
    <button onClick = {()=>{dispatch({type:"plus"})}} > + </button>
    <button onClick = {()=>{dispatch({type:"minus"})}} > - </button>
    </>
)
}

function reduser(state, action) {
switch (action.type) {
    case "plus": return {...state, count: state.count +1};
    case "minus": return {...state, count: state.count -1};
    default: return {state}
}
}