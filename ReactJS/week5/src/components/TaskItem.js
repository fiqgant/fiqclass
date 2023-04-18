import React, { Component } from 'react';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }

    handleDeleteTask() {
        this.props.onDelete(this.props.task);
    }

    render() {
        return (
        <li>
            {this.props.task}
            {" "}
            <button onClick={this.handleDeleteTask}>Hapus</button>
        </li>
        );
    }
}

export default TaskItem;