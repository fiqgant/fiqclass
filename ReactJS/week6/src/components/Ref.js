import React, { Component } from "react";

class Ref extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const input = this.textInput.current;
        alert("Nilai input adalah: " + input.value);
    };

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h1>Ref</h1>
            <label>
            Nama:
            <input type="text" ref={this.textInput} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
        );
    }
}

export default Ref;
