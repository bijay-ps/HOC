import React, { useState } from "react";
import withCounter from "./withCounter";

function HoverIncrease(props) {
    // const [fontSize, setFontSize] = useState(10);
    return (
        <div>
            {/*<button onMouseOver={() => setFontSize(fontSize + 1)}>*/}
            <button onMouseOver={() => props.incrementCounter()}>
                Increase on hover
            </button>
            <p style={{ fontSize: props.counter }}>Size of font: {props.counter} </p>
            <p> Value of 'name' in HoverIncrease: {props.name}</p>
        </div>
    )
}

export default withCounter(HoverIncrease);