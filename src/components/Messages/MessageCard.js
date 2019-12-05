import React, { Component } from 'react';
import { Link } from "react-router-dom"


class MessageCard extends Component {
    render() {
        return (

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Message</h5>
                <h2><span className="card-message">{this.props.message.message}</span></h2>
                <a href="#" className="card-link">Edit Message</a>
                <button type="button" onClick={() => this.props.deleteMessage(this.props.message.id)}>Discharge</button>
            </div>
        </div>
        )
    }
}

export default MessageCard










