import React, { Component } from "react"
import MessageManager from "../../Modules/MessageManager"
import "./MessageForm.css"

class MessageEditForm extends Component {
    //set the initial state
    state = {
      message: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingMessage = evt => {            // may need to look at messageMessage might need to be message
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedMessage = {
        id: this.props.match.params.messageId,
        message: this.state.message,  //d
      };

      MessageManager.update(editedMessage)
      .then(() => this.props.history.push("/messages"))
    }

    componentDidMount() {
      MessageManager.get(this.props.match.params.messageId)
      .then(message => {
          console.log(message)
          this.setState({
            message: message.message,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="message"
                value={this.state.message}  //d
              />
              <label htmlFor="message">Message</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingMessage}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default MessageEditForm