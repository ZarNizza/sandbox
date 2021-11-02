import { useState } from "react";
import "./App.css";

export function App() {
  const [myTime, setMyTime] = useState(new Date());
  function tick() {
    setMyTime(new Date());
  }
  
  setInterval(() => tick(), 1000);

  return (
    <div className="flexOuter">
      <div className="flexInner">{myTime.toLocaleTimeString()}</div>
    </div>
  );
}
