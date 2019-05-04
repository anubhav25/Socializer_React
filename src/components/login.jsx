import React, { Component } from "react";
import NavBar from "./navbar";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import { connect } from "react-redux";

import "./login.scss";

class Login extends Component {
  title = "Socializer";
  render() {
    return (
      <>
        <NavBar />

        <div className="intro-body">
          <div className="container">
            <div className="row">
              {(this.props.isLogin && <LoginForm />) || (
                <div className="col-lg-6 col-md-8 col-10 mx-auto form-box">
                  <RegisterForm />
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(Login);
