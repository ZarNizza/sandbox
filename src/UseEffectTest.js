import {useState, useEffect} from 'react';

export function UseEffectTest() {
const [c,sC] = useState(0);

useEffect(()=> setTimeout(()=>console.log('count = ', c), 3000));

return (
<> 
<p>Count = {c}</p>
<button onClick={()=>sC(c + 1)}>Inc (+)</button>
</>

)


}