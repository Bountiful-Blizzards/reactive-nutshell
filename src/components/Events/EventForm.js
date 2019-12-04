import React, { Component } from 'react';
import EventManager from '../../Modules/EventManager';
import './EventForm.css'
// user linking begins here

class EventForm extends Component {
    render() {
      return (
  
      <div className="card">
          <div className="card-body">
          <article id="newArticleForm"><h1>Add New Event</h1>
          <section>
              <label htmlFor="name">Name</label>
              <input type="text" id="event-input"/>
          </section>
      
          <section>
              <label htmlFor="date">Date</label>
              <textarea type="text" id="date-input" rows="3"></textarea>
          </section>
      
          <section>
          <label htmlFor="location">Location</label>
          <input type="text" id="location-input"/>
          </section>
          <button id="saveEvent">Save Event</button>
          </article>
          </div>
      </div>
      )
  }
  }

export default EventForm
        