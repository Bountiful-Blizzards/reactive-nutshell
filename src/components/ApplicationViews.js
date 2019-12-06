import { Route, withRouter, Redirect } from "react-router-dom";
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
import Login from "./Auth/Login";
import NewsEditForm from "./News/NewsEditForm";
import Reg from "./Auth/Reg"








export default class ApplicationViews extends Component {


  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>

       <Route
          exact path="/" render={props => {
            return <Login setUser={this.props.setUser} {...props} />
          }}
        />

        <Route
          exact path="/register" render={props => {
            return <Reg setUser={this.props.setUser} {...props} />
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

        <Route exact path="/messages" render={props => {
          if (this.isAuthenticated()) {
            return <MessageList {...props} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        {/* the above code checks session storage and if no user is in session storage, it will not render */}

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

        <Route exact path="/tasks" render={props => {
          if (this.isAuthenticated()) {
            return <TaskList {...props} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        {/* the above code checks session storage and if no user is in session storage, it will not render */}

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
        <Route exact path="/events" render={props => {
          if (this.isAuthenticated()) {
            return <EventList {...props} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        {/* the above code checks session storage and if no user is in session storage, it will not render */}


        <Route path="/events/new" render={(props) => {
          return <EventForm {...props} />
        }} />

        <Route path="/events/:eventId(\d+)/edit" render={props => {
          return <EventEditForm {...props} />
        }} />

        <Route exact path="/articles" render={props => {
          if (this.isAuthenticated()) {
            return <Newslist {...props} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        {/* the above code checks session storage and if no user is in session storage, it will not render */}

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
