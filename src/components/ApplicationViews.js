import { Route } from "react-router-dom";
import React, { Component } from "react";
import MessageList from "./Messages/MessageList";
import Newslist from "./News/NewsList";
import EventList from "./Events/EventList";
import TaskList from "./Tasks/TaskList";
import NewsForm from "./News/NewsForm";
import TaskForm from "./Tasks/TaskForm";
import EventForm from "./Events/EventForm";
import MessageForm from "./Messages/MessageForm";
import MessageEditForm from "./Messages/MessageEditForm";
import EventEditForm from "./Events/EventEditForm";
import TaskEditForm from "./Tasks/TaskEditForm";
import NewsEditForm from "./News/NewsEditForm";








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
        {/* <Route exact path="/messages/:messageId(\d+)" render={(props) => {
          return <MessageDetail messageId={parseInt(props.match.params.messageId)} {...props} />
        }} /> */}

        <Route
          exact path="/messages" render={props => {
            return <MessageList {...props} />
          }}
        />

        <Route
          path="/messages/new" render={props => {
            return <MessageForm {...props} />
            // Remove null and return the component which will show the messages
          }}
        />
        <Route
          path="/messages/:messageId(\d+)/edit" render={props => {
            return <MessageEditForm {...props} />
          }}
        />
        <Route
          exact path="/tasks" render={props => {
            return <TaskList {...props} />
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/tasks/new" render={props => {
            return <TaskForm {...props} />
            // Remove null and return the component which will show the user's tasks
          }}
        />
        <Route
          path="/tasks/:taskId(\d+)/edit" render={props => {
            return <TaskEditForm {...props} />
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

        <Route path="/events/:eventId(\d+)/edit" render={props => {
          return <EventEditForm {...props} />
         }} />

        <Route
          exact path="/articles" render={props => {
            return <Newslist {...props} />
          }}
        />
        <Route
          path="/articles/new" render={props => {
            return <NewsForm {...props} />
          }}
        />
         <Route
          path="/articles/:articles(\d+)/edit" render={props => {
            return <NewsEditForm {...props} />
          }}
        />

      </React.Fragment>
    );
  }
}
