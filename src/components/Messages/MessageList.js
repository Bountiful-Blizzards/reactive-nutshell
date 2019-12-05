import React, { Component } from "react"
import MessageCard from "./MessageCard"
import MessageManager from "../../Modules/MessageManager"
import { Link } from "react-router-dom"


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

    deleteMessage = id => {
        MessageManager.delete(id)
        .then(() => {
          MessageManager.getAll()
          .then((newMessages) => {
            this.setState({
                messages: newMessages
            })
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
                    <Link to={`/messages/new`}>Add Message</Link>
                </section>
                <div className="container-cards">
                    {this.state.messages.map(message =>
                        <MessageCard
                            key={message.id}
                            message={message}
                            deleteMessage={this.deleteMessage}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default MessageList




