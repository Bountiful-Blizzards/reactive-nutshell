import React, { Component } from 'react';
import EventManager from '../../Modules/EventManager';
import './EventForm.css'
// user linking begins here

class EventForm extends Component {
    
    state ={
        name: "",
        date: "",
        location: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateTochange = {};
        stateTochange[evt.target.id] = evt.target.value;
        this.setState(stateTochange);
    };

    constructNewEvent = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.date === "" || this.state.location === "") {
            window.alert("Fill out Event") 
        } else {
            this.setState({ loadingStatus: true});
            const event = {
                name: this.state.name,
                date: this.state.date,
                location: this.state.location
            };

            EventManager.post(event)
            .then(() => this.props.history.push("/events"));
        }
    };

    componentDidMount() {
        EventManager.getAll()
        .then(events => this.setState({events: events}))
    }
    
    render() {
      return (
    <>
      <div className="card">
          <div className="card-body">
          <article id="newArticleForm"><h1>Add New Event</h1>
          <section>
              <label>Name</label>
              <input type="text" id="name" onChange={this.handleFieldChange}/>
          </section>
      
          <section>
              <label>Date</label>
              <input type="text" id="date" onChange={this.handleFieldChange}/>
          </section>
      
          <section>
          <label>Location</label>
          <input type="text" id="location" onChange={this.handleFieldChange}/>
          </section>
          <button id="saveEvent" disabled={this.state.loadingStatus} onClick={this.constructNewEvent}>Save Event</button>
          </article>
          </div>
      </div>
      </>
      )
  }
  }

export default EventForm
        