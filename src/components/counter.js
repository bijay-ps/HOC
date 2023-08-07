import React, { Component } from "react";
import Test from "./test";

// Step 1: create the class
class CounterComponent extends Component {

    constructor() {
        super();

        this.state = {
            name: 'Eddy'
        }
    }

    nameChangeHandler() {
        this.setState({
            name: 'Teddy'
        })
    }

    // Step 2: return JSX from render method
    render() {
        return (
            <>
                <div> Hello, {this.state.name} I am inside class based component </div>
                <button onClick={this.nameChangeHandler.bind(this)}>Change Name</button>
                <Test />
            </>
        )
    }
}

export default CounterComponent;