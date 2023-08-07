import React, { useState } from "react";
import withCounter from "./withCounter";

function ClickIncrease(props) {
  const [fontSize, setFontSize] = useState(10);
  return (
    <div>
      {/*<button onClick={() => setFontSize(fontSize+1)}>*/}
      <button onClick={() => props.incrementCounter()}>
        Increase with click
      </button>
      <p style={{ fontSize: props.counter }}>Size of font in onClick function: {props.counter}</p>
      <p> Value of 'name' in HoverIncrease: {props.name}</p>
    </div>
  );
}
export default withCounter(ClickIncrease);