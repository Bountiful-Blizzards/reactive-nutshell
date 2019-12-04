import React, { Component } from 'react';
import { Link } from "react-router-dom"


class MessageCard extends Component {
    render() {
        return (

        <div class="card">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Delete Message</a>
                <a href="#" className="card-link">Edit Message</a>
            </div>
        </div>
        )
    }
}

export default MessageCard










