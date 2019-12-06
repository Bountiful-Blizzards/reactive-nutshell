import React, { Component } from "react"
import EventManager from "../../Modules/EventManager"
import "./EventForm.css"

class EventEditForm extends Component {

    state = {
        name: "",
        date: "",
        location: "",
        loadingstatus: true
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    
    }

    updateExistingEvent = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true});
        const editedEvent = {
            id: this.props.match.params.eventId,
            name: this.state.name,
            date: this.state.date,
            location: this.state.location
        };
    

    EventManager.update(editedEvent)
    .then(() => this.props.history.push("/events"))

    }

    componentDidMount() {
        EventManager.get(this.props.match.params.eventId)
        .then(event => {
            this.setState({
            name: event.name,
            date: event.date,
            location: event.location,
            loadingStatus: false
        });
    });


  }

  render() {
      return(
          <>
          <form>
           <fiedset>
            <div className="formgrid">
            <h3 htmlFor="eventName">Name</h3>
              <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              value={this.state.name}
              />

             <h3 htmlFor="date">Date</h3>
              <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              value={this.state.date}
              />

             <h3 htmlFor="location">Location</h3>
              <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="location"
              value={this.state.location}
              />
              
             </div>
             <div className="alignRight">
             <button
               type="button" disabled={this.state.loadingStatus}
               onClick={this.updateExistingEvent}
               className="btn btn-primary">
               Submit</button>
              </div>
           </fiedset>
          </form>
         </>
      );
    }
}


export default EventEditForm