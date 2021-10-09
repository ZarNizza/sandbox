export function RunCalcTable(state, dispatch) {
    return (
<table className="runCalc">
<caption>- Run Calc -</caption>
<tbody>
  <tr>
    <td>путь: *</td>
    <td>
      <input
        id="distance"
        value={state.dist}
        onChange={(event) => {
          dispatch({ type: "dist", value: event.target.value });
        }}
        type="text"
        maxlength="4"
      />{" "}
    </td>
    <td>км</td>
  </tr>
  <tr>
    <td>время: </td>
    <td>
      <input
        id="time"
        value={state.time}
        onChange={(event) => {
          dispatch({ type: "time", value: event.target.value });
        }}
        type="text"
        maxlength="4"
      />{" "}
    </td>
    <td>мин</td>
  </tr>
  <tr>
    <td>м/с: </td>
    <td>
      <input
        id="mSpeed"
        value={state.mSpeed}
        onChange={(event) => {
          dispatch({ type: "mSpeed", value: event.target.value });
        }}
        type="text"
        maxlength="4"
      />{" "}
    </td>
    <td>м/с</td>
  </tr>
  <tr>
    <td>км/ч: </td>
    <td>
      <input
        id="kSpeed"
        value={state.kSpeed}
        onChange={(event) => {
          dispatch({ type: "kSpeed", value: event.target.value });
        }}
        type="text"
        maxlength="4"
      />{" "}
    </td>
    <td>км/ч</td>
  </tr>
  <tr>
    <td>темп: </td>
    <td>
      <input
        id="pace"
        value={state.pace}
        onChange={(event) => {
          dispatch({ type: "pace", value: event.target.value });
        }}
        type="text"
        maxlength="4"
      />{" "}
    </td>
    <td>мин/км</td>
  </tr>
  <tr>
    <td> </td>
  </tr>
  <tr>
    <td>каденс: *</td>
    <td>
      <input
        id="cadense"
        value={state.cadense}
        onChange={(event) => {
          dispatch({ type: "cadense", value: event.target.value });
        }}
        type="text"
        maxlength="4"
      />{" "}
    </td>
    <td>шаг/мин</td>
  </tr>
  <tr>
    <td>длШага: </td>
    <td>
      <input
        id="strLength"
        value={state.strLength}
        onChange={(event) => {
          dispatch({ type: "strLength", value: event.target.value });
        }}
        type="text"
        maxlength="4"
      />{" "}
    </td>
    <td>м</td>
  </tr>
</tbody>
</table>
);
}