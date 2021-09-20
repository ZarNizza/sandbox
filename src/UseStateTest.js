import {useState} from "react";

export function UseStateTst() {
const [c, sC] = useState(16);
const [c2, sC2] = useState(16);
return (
<>
<p>use State</p>
<p>Count: {c} - {c2}</p>
<button onClick = {() => sC(previousC => previousC +1)}> Inc (+) </button> &nbsp;
<button onClick = {() => sC(previousC => previousC -1)}> Dec (-) </button>&nbsp;-&nbsp;-&nbsp;-&nbsp;
<button onClick = {() => sC2(previousC => previousC +1)}> Inc2 (+) </button> &nbsp;
<button onClick = {() => sC2(previousC => previousC -1)}> Dec2 (-) </button>
</>
)

}