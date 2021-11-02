import React, { useState, useRef, useEffect } from "react";

export function SandBox() {
  const [q, setQ] = useState("***");
  const qid1 = useRef(null);
  const qid2 = useRef(null);

  function inputHandler(e) {
    setQ(e.target.value);
    qid1.current.innerHTML = q;
    qid2.current.innerHTML = e.target.value;
  }

  useEffect(()=>document.title=q, [q] );
  
  return (
    <>
<input type="text" placeholder="some number..." onChange={inputHandler} autoFocus = {true} />
      <div ref={qid1} className="b">
        ...
      </div>
      <div ref={qid2} className="g">
        ...
      </div>
    </>
  );
}
