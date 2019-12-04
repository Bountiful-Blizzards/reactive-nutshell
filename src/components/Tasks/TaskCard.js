import React, { Component } from 'react';
import { Link } from "react-router-dom"


class TaskCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <input type="checkbox"></input>
                    <Link to={`/tasks/${this.props.task.id}`} className="card-title" style={{ width: "18rem" }}><h5><b>{this.props.task.task}</b></h5></Link>
                    <div className="input-group-append" id="button-addon4">
                        <button className="btn btn-outline-secondary" type="button">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskCard