import { useState } from "react";

export function ABC() {
const [speed, setSpeed] = useState(2);
const kSpeed = speed *3600/1000;

    return (
        <>
        <div>mps: <input id="mpsSpeed" value={speed} onChange={event => setSpeed(event.target.value)} /> </div>
        <div>kmh: <input id="kmhSpeed" value={kSpeed} /> </div>
        </>
    )
}