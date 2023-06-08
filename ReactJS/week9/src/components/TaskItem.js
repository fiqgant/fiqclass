import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to={`/tugas/${this.props.task}`} activeClassName={styles.activeNavLink}>
          {this.props.task}
        </NavLink>
        {" "}
        <button onClick={this.handleDeleteTask}>Hapus</button>
      </li>
    );
  }
}

export default TaskItem;
