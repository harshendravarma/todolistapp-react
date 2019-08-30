import React, { Component } from "react";
class Task extends Component {
  state = {};
  render() {
    return (
      <div className="card bg-light text-dark">
        <div className="card-body row">
          <div className="col-sm-9">
            <h5>{this.props.task.taskBody}</h5>
          </div>
          <div className="col-sm-3">
            <button
              className="btn"
              onClick={() => this.props.onDelete(this.props.task)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
