import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import "./login.scss";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  title = "Socializer";
  usernameRef = null;
  passwordRef = null;
  login(e) {
    e.preventDefault();
    e.target.checkValidity() &&
      this.props.dispachLogin({
        username: this.state.username.toLowerCase(),
        password: this.state.password
      });
  }
  // v-arjjos@microsoft.com

  render() {
    return (
      <div className="col-lg-10 mx-auto">
        <div className="row">
          <div className="col-md-6">
            <h1>Welcome to {this.title}</h1>
          </div>
          <div className="col-md-6">
            <div className="row">
              <form
                name="form"
                className="col-lg-10 mx-auto"
                onSubmit={this.login.bind(this)}
                noValidate
              >
                <div
                  className={`form-group col-12 ${
                    this.usernameRef && !this.usernameRef.checkValidity()
                      ? ""
                      : "has-error"
                  }`}
                >
                  <input
                    type="text"
                    ref={el => {
                      this.usernameRef = el;
                    }}
                    className="form-control lowercase"
                    placeholder="username"
                    name="username"
                    value={this.state.username}
                    onChange={e => {
                      this.setState({ username: e.target.value });
                    }}
                    required
                  />
                  {this.usernameRef && !this.usernameRef.checkValidity() && (
                    <div className="help-block error">Username is required</div>
                  )}
                </div>
                <div
                  className={`form-group col-12 ${
                    this.passwordRef && !this.passwordRef.checkValidity()
                      ? ""
                      : "has-error"
                  }`}
                >
                  <input
                    type="password"
                    ref={el => {
                      this.passwordRef = el;
                    }}
                    className="form-control"
                    placeholder="password"
                    name="password"
                    value={this.state.password}
                    onChange={e => {
                      this.setState({ password: e.target.value });
                    }}
                    required
                  />
                  {this.passwordRef && !this.passwordRef.checkValidity() && (
                    <div className="help-block error">Password is required</div>
                  )}
                </div>
                {this.props.loginError && this.props.loginError.length > 0 && (
                  <div
                    className="form-group alert alert-danger col-10 mx-auto"
                    role="alert"
                  >
                    {this.props.loginError}
                  </div>
                )}
                <div className="form-group">
                  <button
                    type="submit"
                    disabled={this.props.loading}
                    className="btn btn-primary"
                  >
                    Login
                    {this.props.loading && (
                      <img
                        alt=""
                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                      />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapPropsToStore = ({ Authentication }) => {
  return {
    loginError: (Authentication && Authentication.loginError) || "",
    loading: (Authentication && Authentication.loading) || false
  };
};
const mapDispatchToProps = dispach => {
  return {
    dispachLogin: payload => dispach({ type: actions.LOGIN, payload })
  };
};
export default connect(
  mapPropsToStore,
  mapDispatchToProps
)(LoginForm);
//[style.display]="wrongPasswordAlert"