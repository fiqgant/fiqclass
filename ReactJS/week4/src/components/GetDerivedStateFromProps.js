import React, { Component } from 'react';

class GetDerivedStateFromProps extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        name: '',
        age: 0
    };
    }

    static getDerivedStateFromProps(props, state) {
    if (props.name !== state.name) {
        return {
        name: props.name
        };
    }

    return null;
    }

    render() {
    const { name, age } = this.state;

    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
    }
}

export default GetDerivedStateFromProps;
