import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";
import Login from "./Auth/Login";


localStorage.setItem("currentUser", 1)
let i = localStorage.getItem("currentUser", 1)

class Nutshell extends Component {

    state = {
      user: false
    }
  
    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null
  
    setUser = (authObj) => {
      /*
        For now, just store the email and password that
        the customer enters into local storage.
      */
      localStorage.setItem(
        "credentials",
        JSON.stringify(authObj)
      )
      this.setState({
        user: this.isAuthenticated()
      });
    }
  
    clearUser = () => {
      // localStorage.clear()
      localStorage.removeItem("credentials")
  
      this.setState({user: this.isAuthenticated()})
    }
  
    componentDidMount() {
      this.setState({
        user: this.isAuthenticated()
      })
    }
  render() {
    return (
      <React.Fragment>

<NavBar user={this.state.user} clearUser={this.clearUser} />       
 <ApplicationViews user={this.state.user}
          setUser={this.setUser} />
      </React.Fragment>
    );
  }
}

export default Nutshell;
