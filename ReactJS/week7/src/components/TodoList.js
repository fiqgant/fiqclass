import React, { Component } from 'react';
import TaskItem from './TaskItem';
import styles from '../style/TodoList.module.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }

    handleAddTask(event) {
        event.preventDefault();
        const taskName = this.taskInput.value;
        const newTasks = [...this.state.tasks, taskName];
        this.setState({
            tasks: newTasks
        });
        this.taskInput.value = '';
    }

    handleDeleteTask(taskToDelete) {
        const filteredTasks = this.state.tasks.filter(task => task !== taskToDelete);
        this.setState({
            tasks: filteredTasks
            });
    }

    render() {
        return (
        <div className={styles.container}>
            <h1 className={styles.title}>Daftar Tugas</h1>
            <ul >
                {this.state.tasks.map((task, index) =>
                    <TaskItem key={index} task={task} onDelete={this.handleDeleteTask} />
                )}
            </ul>
            <form className={styles.form} onSubmit={this.handleAddTask}>
                <input 
                    type="text" 
                    placeholder="Tambahkan Tugas" 
                    ref={(input) => this.taskInput = input} />
                {" "}
                <button 
                    type="submit" 
                    onClick={this.handleAddTask}>
                        Tambahkan Tugas
                </button>
            </form>
        </div>
        );
    }
}

export default TodoList;