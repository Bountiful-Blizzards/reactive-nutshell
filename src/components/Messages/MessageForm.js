import React, { Component } from 'react';
import MessageManager from '../../Modules/MessageManager';
import "./MessageForm.css"




class MessageForm extends Component {

    state = {
        message: " ",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    constructNewMessage = evt => {
        evt.preventDefault();
        if (this.state.message === "") {
            window.alert("Fill Out a Message");
        } else {
            this.setState({ loadingStatus: true });
            const message = {
                message: this.state.message,
            };

            // Create the message and redirect user to message list
            MessageManager.post(message)
                .then(() => this.props.history.push("/messages"));
        }
    };

    componentDidMount() {
        MessageManager.getAll()
        .then(messages => this.setState({messages: messages}))
    }


    render() {
        return (
            <>
                <div className="formgrid">
                    <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="message"
                        placeholder="Message"
                    />
                    <label htmlFor="message">Message</label>
                </div>
                <div className="alignRight">
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewMessage} id="saveMessage">Save Message</button>
                </div>
            </>
        )

    }
}




export default MessageForm