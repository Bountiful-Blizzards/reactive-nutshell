import React, { Component } from 'react';
import TaskManager from "../../Modules/TaskManager"


class TaskCard extends Component {

    state = {
        status: true
      };
    
      handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
      }
    
      updateStatus = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedTask = {
          status: this.state.status
        };
    
        TaskManager.update(editedTask)
          .then(() => this.props.history.push("/tasks"))
      }
    
      componentDidMount() {
        TaskManager.getTask(this.props.match.params.taskId)
          .then(() => {
            this.setState({
              status: false
            });
          });
      }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <input type="checkbox" onChange={this.handleFieldChange} onClick={() => { this.props.updateStatus(this.props.task.id)}}></input>
                    <h5 onClick={() => { this.props.history.push(`/tasks/${this.props.task.id}/edit`) }} className="card-title" style={{ width: "18rem" }}><b>{this.props.task.name}</b></h5>
                    <p>Expected Completion: {this.props.task.date}</p>
                    <button type="button" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete</button>
                </div>
            </div>
        )
    }
}
export default TaskCard