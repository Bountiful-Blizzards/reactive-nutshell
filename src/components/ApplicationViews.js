import { Route } from "react-router-dom";
import React, { Component } from "react";
import MessageList from "./Messages/MessageList";
import Newslist from "./News/NewsList";
import EventList from "./Events/EventList";
import TaskList from "./Tasks/TaskList";
import NewsForm from "./News/NewsForm";
import EventForm from "./Events/EventForm";





export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
          }}
        />

        <Route
          exact path="/register" render={props => {
            return null
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
          }}
        />

        <Route
          path="/messages" render={props => {
            return <MessageList {...props} />
          }}
        />

        <Route
          exact path="/tasks" render={props => {
            return <TaskList {...props} />
          }}
        />

        <Route
           exact path="/events" render={props => {
            return <EventList {...props} />
          }}
        />
        <Route path="/events/new" render={(props) => {
          return <EventForm {...props} />
         }} />

        <Route
         exact path="/articles" render={props => {
            return <Newslist {...props} />
          }}
        />
         <Route
          path="/articles/new" render={props => {
            return <NewsForm {...props} />
            // Remove null and return the component which will show the messages
          }}
        />

      </React.Fragment>
    );
  }
}
