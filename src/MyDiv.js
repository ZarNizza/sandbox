import React from "react";

export const MyDiv  = React.forwardRef((props, ref) => (
<div ref={ref} className={props.className}>...</div>)
);