//import { useRef } from "react/cjs/react.development";
import { useReducer} from "react";


function rCalc(state, action) {
    switch (action.type) {
        case "mSpeed": {
            const kSpeed = isFinite(Math.round(action.value *3600/10)/100) ? Math.round(action.value *3600/10)/100 : 0;
            const pace = isFinite(Math.round(6000/kSpeed)/100) ? Math.round(6000/kSpeed)/100 : 0;
            const strLength = isFinite(Math.round(kSpeed*100000/(state.cadense*60))/100) ? Math.round(kSpeed*100000/(state.cadense*60))/100 : 0;
            return {...state, mSpeed:action.value, kSpeed:kSpeed, pace:pace, strLength:strLength, };}
        case "kSpeed": {
            const mSpeed = isFinite(Math.round(action.value *100/36)/10) ? Math.round(action.value *100/36)/10 : 0;
            const pace = isFinite(Math.round(600/action.value)/10) ? Math.round(600/action.value)/10 : 0;
            const strLength = isFinite(Math.round(action.value*10000/(state.cadense*60))/10) ? Math.round(action.value*10000/(state.cadense*60))/10 : 0;
            return {...state, mSpeed:mSpeed, kSpeed:action.value, pace:pace, strLength:strLength, };}
        case "pace": {
            const kSpeed = isFinite(Math.round(600/action.value)/10) ? Math.round(600/action.value)/10 : 0;
            const mSpeed = isFinite(Math.round(kSpeed *100/36)/10) ? Math.round(kSpeed *100/36)/10 : 0;
            const strLength = isFinite(Math.round(kSpeed*10000/(state.cadense*60))/10) ? Math.round(kSpeed*10000/(state.cadense*60))/10 : 0;
            return {...state, mSpeed:mSpeed, kSpeed:kSpeed, pace:action.value, strLength:strLength, };}
        case "cadense": {
            const kSpeed = isFinite(Math.round(action.value * state.strLength *6/10)/10) ? Math.round(action.value * state.strLength *6/10)/10 : 0;
            const mSpeed = isFinite(Math.round(kSpeed *100/36)/10) ? Math.round(kSpeed *100/36)/10 : 0;
            const pace = isFinite(Math.round(600/kSpeed)/10) ? Math.round(600/kSpeed)/10 : 0;
            return {...state, mSpeed:mSpeed, kSpeed:kSpeed, pace:pace , cadense:action.value, };}
        case "strLength": {
            const kSpeed = isFinite(Math.round(action.value * state.cadense *6/10)/10) ? Math.round(action.value * state.cadense *6/10)/10 : 0;
            const mSpeed = isFinite(Math.round(kSpeed *100/36)/10) ? Math.round(kSpeed *100/36)/10 : 0;
            const pace = isFinite(Math.round(600/kSpeed)/10) ? Math.round(600/kSpeed)/10 : 0;
            return {...state, mSpeed:mSpeed, kSpeed:kSpeed, pace:pace , strLength:action.value, };}
        default: return {state}
    }
    }


export function RunCalc() {
const [state, dispatch] = useReducer(rCalc, {value:0, mSpeed:3.33, kSpeed:12, pace:5, cadense:167, strLength:1});

return (
        <>
        <div>_м/с: <input id="mSpeed" value={state.mSpeed} onChange={(event) => {dispatch({type:"mSpeed", value:event.target.value})}} type="text" maxlength="4" /> </div>
        <div>км/ч: <input id="kSpeed" value={state.kSpeed} onChange={(event) => {dispatch({type:"kSpeed", value:event.target.value})}} type="text" maxlength="4" /> </div>
        <div>темп: <input id="pace" value={state.pace} onChange={(event) => {dispatch({type:"pace", value:event.target.value})}} type="text" maxlength="4" /> </div>
        <br/>
        <div>каденс: <input id="cadense" value={state.cadense} onChange={(event) => {dispatch({type:"cadense", value:event.target.value})}} type="text" maxlength="4" /> </div>
        <div>длШага: <input id="strLength" value={state.strLength} onChange={(event) => {dispatch({type:"strLength", value:event.target.value})}} type="text" maxlength="4" /> </div>
        </>
    )
}

