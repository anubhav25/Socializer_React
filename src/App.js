import React, { Component } from "react";
import "./App.scss";
import Login from "./components/login";
import { connect } from "react-redux";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => (
            <Redirect to={`/${this.props.user ? "home" : "login"}`} />
          )}
        />
        <Route
          path="/login"
          exact
          render={() => (this.props.user ? <Redirect to="/home" /> : <Login />)}
        />
        <Route
          path="/register"
          exact
          render={() => (this.props.user ? <Redirect to="/home" /> : <Login />)}
        />
        <Route
          path="/home"
          exact
          render={() =>
            this.props.user ? <h1>hello</h1> : <Redirect to="/login" />
          }
        />
      </BrowserRouter>
    );
  }
}
const mapPropsToStore = ({ Authentication }) => {
  return {
    user: Authentication.user
  };
};
const mapDispatchToProps = dispach => {
  return {};
};
export default connect(
  mapPropsToStore,
  mapDispatchToProps
)(App);
