import React, { useState, useEffect } from "react";
import { MyDiv } from "./MyDiv";

export function SandBox() {
  const [q, setQ] = useState("***");
  //   const qid1 = useRef(null);
  //   const qid2 = useRef(null);
  const qref1 = React.createRef();
  const qref2 = React.createRef();

  function inputHandler(e) {
    setQ(e.target.value);
    qref1.current.innerHTML = q;
    qref2.current.innerHTML = e.target.value;
  }

  useEffect(() => (document.title = q), [q]);

  return (
    <>
      <input
        type="text"
        placeholder="some number..."
        onChange={inputHandler}
        autoFocus={true}
      />
      <MyDiv ref={qref1} className="b" />
      <MyDiv ref={qref2} className="g" />
    </>
  );
}
