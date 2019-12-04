import { Route } from "react-router-dom";
import React, { Component } from "react";
import MessageList from "./Messages/MessageList";
import Newslist from "./News/NewsList";
import EventList from "./Events/EventList";
import TaskList from "./Tasks/TaskList";
import NewsForm from "./News/NewsForm";
import TaskForm from "./Tasks/TaskForm";





export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          exact path="/register" render={props => {
            return null
            // Remove null and return the component which will handle user registration
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return <MessageList {...props} />
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          exact path="/tasks" render={props => {
            return <TaskList {...props} />
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          exact path="/tasks" render={props => {
            return <TaskForm {...props} />
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/events" render={props => {
            return <EventList {...props} />
            // Remove null and return the component which will show the user's events
          }}
        />

        <Route
          exact path="/articles" render={props => {
            return <Newslist {...props} />
            // Remove null and return the component which will show the messages
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
