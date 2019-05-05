import React, { Component } from "react";
import "./App.scss";
import Login from "./components/login";
import { connect } from "react-redux";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Profile from "./components/profile";
import * as actions from "./actions";
import ChangePassword from "./components/change-password";

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
          render={() =>
            this.props.user ? <Redirect to="/home" /> : <Login isLogin />
          }
        />
        <Route path="/logout" exact render={() => <Redirect to="/login" />} />
        <Route
          path="/register"
          exact
          render={() =>
            this.props.user ? (
              <Redirect to="/home" />
            ) : (
              <Login isLogin={false} />
            )
          }
        />
        <Route
          path="/home"
          exact
          render={() =>
            this.props.user ? <Profile /> : <Redirect to="/login" />
          }
        />
        <Route
          path="/changepassword"
          exact
          render={() =>
            this.props.user ? <ChangePassword /> : <Redirect to="/login" />
          }
        />
        <Route
          path="/profile/:username"
          exact
          render={e => {
            this.props.dispatchSearch(e.match.params.username);
            return <Profile />;
          }}
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
  return {
    dispatchSearch: username => {
      console.log(username);
      dispach({ type: actions.GETUSER, payload: username });
    }
  };
};
export default connect(
  mapPropsToStore,
  mapDispatchToProps
)(App);
