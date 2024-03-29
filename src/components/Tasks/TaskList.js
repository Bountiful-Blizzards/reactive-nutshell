import React, { Component } from "react"
import TaskCard from "./TaskCard"
import TaskManager from "../../Modules/TaskManager"

class TaskList extends Component {
    state = {
        tasks: [],
    }


    componentDidMount() {
        TaskManager.getAllTasks()
            .then((tasks) => {
                this.setState({
                    tasks: tasks
                })
            })

    }

    deleteTask = id => {
        TaskManager.delete(id)
          .then(() => {
            TaskManager.getAllTasks()
              .then((newTasks) => {
                this.setState({
                  tasks: newTasks
                })
              })
          })
      }

    render() {
        return (
            <>
                <section className="section-content">
                    <button type="button" className="btn" onClick={() => { this.props.history.push("/tasks/new") }}>Add New Task</button>
                </section>
                <div className="container-cards">
                    {this.state.tasks.map(task =>
                        <TaskCard
                            key={task.id}
                            task={task}
                            deleteTask={this.deleteTask}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default TaskList