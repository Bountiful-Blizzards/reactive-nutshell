import React, { Component } from "react"
import TaskCard from "./TaskCard"
import TaskManager from "../../Modules/TaskManager"

class TaskList extends Component {
    state = {
        tasks: [],
    }


    componentDidMount() {
        TaskManager.getAll()
            .then((tasks) => {
                this.setState({
                    tasks: tasks
                })
            })

    }

    render() {
        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.groups.history.push("/tasks/new") }}>
            </button>
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