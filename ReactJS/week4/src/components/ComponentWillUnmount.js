import React, { Component } from 'react';

class ComponentWillUnmount extends Component {
    state = {
        count: 10
    };

    componentDidMount() {
        this.interval = setInterval(() => {
        this.setState(prevState => ({ count: prevState.count - 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleRemove = () => {
        document.getElementById('countdown-container').remove();
    }

    render() {
        const { count } = this.state;

    return (
        <div id="countdown-container">
            <h2>Countdown: {count}</h2>
            <button onClick={this.handleRemove}>Remove Countdown</button>
        </div>
        );
    }
}

export default ComponentWillUnmount;
