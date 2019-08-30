import React, { Component } from "react";
import Task from "../components/task";

class Tasks extends Component {
  state = {
    tasks: []
  };

  handleDelete = task => {
    const tasks = this.state.tasks.filter(t => t.id !== task.id);
    this.setState({ tasks });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.refs.taskInput.value) {
      let tasks = [...this.state.tasks];
      let newTask = [
        { id: tasks.length + 1, taskBody: this.refs.taskInput.value }
      ];
      tasks = tasks.concat(newTask);
      this.setState({ tasks });
    }
  };
  renderTasks = () => {
    if (this.state.tasks.length === 0) {
      return <p>no task to do</p>;
    } else {
      return this.state.tasks.map(task => (
        <Task task={task} onDelete={this.handleDelete} key={task.id}></Task>
      ));
    }
  };
  render() {
    return (
      <div className="container">
        <h2>TODO LIST</h2>
        <div className="card">
          <div className="card-body row">
            <form ref="form" onSubmit={this.onSubmit} className="form-inline">
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  ref="taskInput"
                  placeholder="addTask"
                ></input>
              </div>
              <div className="col-sm-3">
                <button type="submit" className="btn btn-primary">
                  +add
                </button>
              </div>
            </form>
          </div>
        </div>
        <br></br>
        {this.renderTasks()}
      </div>
    );
  }
}

export default Tasks;
