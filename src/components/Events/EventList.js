import React, { Component } from "react"
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
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.groups.history.push("/events/new") }}>
            </button>
                </section>
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
            </>
        )
    }
}

export default EventList