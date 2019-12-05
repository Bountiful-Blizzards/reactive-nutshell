import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./TaskForm.css"
import TaskManager from "../../Modules/TaskManager"


class TaskForm extends Component {


    state = {
        taskName: "",
        status: false,
        finishDate: "",
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
                date: this.state.finishDate,
            };

            // Create the animal and redirect user to animal list
            TaskManager.post(task)
                .then(() => this.props.history.push("/tasks"));
        }
    };



    render() {
        return (
            <>
                <div className="form-group row">
                    <section className="formgrid">
                        <label htmlFor="taskName">Add New</label>
                        <input type="text" onChange={this.handleFieldChange} className="form-control" id="taskName" />
                        <label htmlFor="finishDate"></label>
                        <input type="date" id="finishDate" onChange={this.handleFieldChange} />
                    </section>
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