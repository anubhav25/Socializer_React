import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./login-form";
import "./login.scss";

class Login extends Component {
  title = "Socializer";
  isLogin = true;
  render() {
    this.isLogin = !window.location.href.endsWith("/register");
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <Link className="navbar-brand js-scroll-trigger" to="/">
              {this.title}
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {this.isLogin && (
                  <Link to="/register" className="btn btn-outline-primary">
                    SignUp
                    <i className="fa fa-user-plus" aria-hidden />
                  </Link>
                )}
                {!this.isLogin && (
                  <Link to="/login" className="btn btn-outline-primary">
                    LogIn
                    <i className="fa fa-user" aria-hidden />
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>

        <div className="intro-body">
          <div className="container">
            <div className="row">
              {this.isLogin && <LoginForm />}
              {!this.isLogin && <p>Register Form</p>}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
