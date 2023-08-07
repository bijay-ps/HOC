import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
    function NewComponent(props) {
        const [counter, setCounter] = useState(10);
        return <OriginalComponent 
            name="HOC"
            counter={counter} //export our counter Hook
            incrementCounter={() => setCounter(counter + 1)}
        />
    }
    return NewComponent
};

export default UpdatedComponent;