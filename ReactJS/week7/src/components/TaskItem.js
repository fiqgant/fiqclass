import React, { Component } from 'react';
import styles from '../style/TodoList.module.css';

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
        <li className={styles.list}>
            {this.props.task}
            {" "}
            <button onClick={this.handleDeleteTask}>Hapus</button>
        </li>
        );
    }
}

export default TaskItem;