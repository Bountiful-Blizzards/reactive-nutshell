import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./TaskForm.css"


class TaskCard extends Component {
    render() {
        return (
            <form>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <label htmlFor="inputTask3" className="col-sm-2 col-form-label">New Task</label>
                        <input type="text" className="form-control" id="inputTask3" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">Status</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default TaskCard