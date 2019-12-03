import React, { Component } from "react"
import MessageCard from "./MessageCard"
import MessageManager from "../../Modules/MessageManager"

class MessageList extends Component {
    state = {
        messages: [],
    }


    componentDidMount() {
        MessageManager.getAll()
            .then((messages) => {
                this.setState({
                    messages: messages
                })
            })

    }

    render() {
        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.groups.history.push("/messages/new") }}>
            </button>
                </section>
                <div className="container-cards">
                    {this.state.messages.map(message =>
                        <MessageCard
                            key={message.id}
                            message={message}
                            deleteAnimal={this.deleteMessage}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default MessageList




