import React, { Component } from 'react';
import { Link } from "react-router-dom"


class MessageCard extends Component {
    render() {
        return (

        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Message</h5>
                <h2><span className="card-message">{this.props.message.message}</span></h2>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Delete Message</a>
                <a href="#" class="card-link">Edit Message</a>
            </div>
        </div>
        )
    }
}

export default MessageCard










