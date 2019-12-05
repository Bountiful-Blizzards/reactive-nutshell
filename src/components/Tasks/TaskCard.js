import React, { Component } from 'react';


class TaskCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <input type="checkbox"></input>
                    <h5 onClick={() => { this.props.history.push(`/tasks/${this.props.task.id}/edit`) }} className="card-title" style={{ width: "18rem" }}><b>{this.props.task.name}</b></h5>
                    <button type="button" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete</button>
                </div>
            </div>
        )
    }
}
export default TaskCard