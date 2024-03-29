import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EventCard extends Component {
    render() {
      return (
        <div className="card">
            <div className="card-content">
              <picture>
                  {/* pictures will go here */}
              </picture>
              <strong>Name: <Link onClick={() => {this.props.history.push(`/events/${this.props.event.id}/edit`)}} className="card-eventname">{this.props.event.name}</Link></strong>
              <p>Date: {this.props.event.date}</p>
              <p>Location: {this.props.event.location}</p>
              <button type="button" onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button>
            </div>
        </div>
      );
    }
  }

  export default EventCard