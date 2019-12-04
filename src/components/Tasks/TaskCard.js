import React, { Component } from 'react';
import { Link } from "react-router-dom"


class TaskCard extends Component {
    render() {
        return (
<<<<<<< HEAD

        <div class="card">
            <div className="card-body">
                <h5 className="card-title" style={{width: "18rem"}}><b>{this.props.task.task}</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Delete</a>
                <a href="#" className="card-link">Edit</a>
=======
            <div className="card">
                <div className="card-body">
                    <input type="checkbox"></input>
                    <Link to={`/animals/${this.props.task.id}`} className="card-title" style={{ width: "18rem" }}><h5><b>{this.props.task.task}</b></h5></Link>
                    <div className="input-group-append" id="button-addon4">
                        <button className="btn btn-outline-secondary" type="button">Delete</button>
                    </div>
                </div>
>>>>>>> master
            </div>
        )
    }
}

export default TaskCard