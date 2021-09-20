import { useRef } from "react";

export function UseRefTest() {
  const myRef = useRef(null);
  const my2Ref = useRef(null);
  const setFosusHere = () => {
    myRef.current.focus();
  }
  const setFosus2Here = () => {
    my2Ref.current.focus();
  }
  return (
    <>
      <input ref={myRef} /> &nbsp;
      <input ref={my2Ref} />
      <br/>
      <br/>
      <button onClick={setFosusHere}>let's set Focus on 1st</button> &nbsp;
      <button onClick={setFosus2Here}>let's set Focus on 2nd</button>
    </>
  );
}
