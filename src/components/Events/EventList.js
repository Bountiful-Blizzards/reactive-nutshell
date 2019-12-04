import React, { Component } from "react"
import { Link } from "react-router-dom"
import EventCard from "./EventsCard"
import EventManager from "../../Modules/EventManager"

class EventList extends Component {
    state = {
        events: [],
    }


    componentDidMount() {
        EventManager.getAll()
            .then((events) => {
                this.setState({
                    events: events
                })
            })

    }

    render() {
        return (
            <>
                <div className="container-cards">
                    {this.state.events.map(event =>
                        <EventCard
                            key={event.id}
                            event={event}
                            deleteEvent={this.deleteEvent}
                            {...this.props}
                        />
                    )}
                </div>
                    <section className="section-content">
                        <button type="button"
                            className="btn"
                            onClick={() => { this.groups.history.push("/events/new") }}>
                        </button>
                    <Link to={`/events/new`}>Add Event</Link>
                        </section>
            </>
        )
    }
}

export default EventList