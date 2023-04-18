import React from "react";

class OtherComponentUpdate extends React.Component {
    state = {
        count: 0
        }
        
        componentDidUpdate(_prevProps, prevState) {
            if (this.state.count !== prevState.count) {
            document.getElementById('my-counter').innerHTML = this.state.count;
            }
        }
        
        render() {
            return (
            <div>
                <h2>componentDidUpdate untuk memperbarui tampilan</h2>
                <p>Count: <span id="my-counter">{this.state.count}</span></p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                Increment Count
                </button>
            </div>
            )
        }
}

export default OtherComponentUpdate;