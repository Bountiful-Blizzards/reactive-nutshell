import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./TaskForm.css"
import TaskManager from "../../Modules/TaskManager"


class TaskForm extends Component {


    state = {
        taskName: "",
        status: false,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewTask = evt => {
        evt.preventDefault();
        if (this.state.taskName === "") {
            window.alert("Try Harder Next Time Scrub");
        } else {
            this.setState({ loadingStatus: true });
            const task = {
                name: this.state.taskName,
                status: this.state.status,
            };

            // Create the animal and redirect user to animal list
            TaskManager.post(task)
                .then(() => this.props.history.push("/tasks"));
        }
    };


    componentDidMount() {

    }


    render() {
        return (
            <>
                <div className="form-group row">
                    <div className="formgrid">
                        <label htmlFor="taskName" className="col-sm-2 col-form-label"></label>
                        <input type="text" onChange={this.handleFieldChange} className="form-control" id="taskName"/>
                        <placeholder htmlFor="taskName">Enter New Task</placeholder>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary" disabled={this.state.loadingStatus} onClick={this.constructNewTask}>Add</button>
                    </div>
                </div>
            </>
        )
    }
}

export default TaskForm