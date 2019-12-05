import React, { Component } from "react"
import TaskManager from "../../Modules/TaskManager"
import "./TaskForm.css"

class TaskEditForm extends Component {
  //set the initial state
  state = {
    taskName: "",
    loadingStatus: true,
    date: "",
    status: false
  };

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingTask = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedTask = {
      id: this.props.match.params.taskId,
      name: this.state.taskName,
      date: this.state.date,
      status: this.state.status
    };

    TaskManager.update(editedTask)
      .then(() => this.props.history.push("/tasks"))
  }

  componentDidMount() {
    TaskManager.getTask(this.props.match.params.taskId)
      .then(task => {
        this.setState({
          taskName: task.name,
          loadingStatus: false,
          date: task.date,
          status: task.status
        });
      });
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="taskName"
                value={this.state.taskName}
              />
              <label htmlFor="taskName">Task name</label>
              
              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
              <label htmlFor="date">Date</label>

            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingTask}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default TaskEditForm