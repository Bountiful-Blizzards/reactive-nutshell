import React, { Component } from 'react';
import { Link } from "react-router-dom"


class MessageCard extends Component {
    render() {
        return (

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Message</h5>
                <h2><span className="card-message">{this.props.message.message}</span></h2>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Delete Message</a>
                <a href="#" className="card-link">Edit Message</a>
            </div>
        </div>
        )
    }
}

export default MessageCard










