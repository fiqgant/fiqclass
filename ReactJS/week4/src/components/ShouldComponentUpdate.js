import React, { Component } from 'react';

class ShouldComponentUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
        counter: 0
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        // hanya melakukan re-render ketika nilai counter berubah
        if (this.state.counter !== nextState.counter) {
        return true;
        }
        return false;
    }

    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
        <div>
            <h2>Counter: {this.state.counter}</h2>
            <button onClick={this.incrementCounter}>Increment</button>
        </div>
        );
    }
}

export default ShouldComponentUpdate;
