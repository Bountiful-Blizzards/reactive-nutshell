import React, { Component } from 'react';
import { Link } from "react-router-dom"


class MessageCard extends Component {
    render() {
        return (

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Message</h5>
                    <h6>Time Stamp: {this.props.message.timeStamp}</h6> 
                    <h2><span className="card-message">{this.props.message.message}</span></h2>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/messages/${this.props.message.id}/edit`) }}>Edit</button>
                    <button type="button" onClick={() => this.props.deleteMessage(this.props.message.id)}>Discharge</button>
                </div>
            </div>
        )
    }
}

export default MessageCard










