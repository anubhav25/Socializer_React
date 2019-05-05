import React, { Component } from "react";
import NavBar from "./navbar";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./login.scss";
import * as actions from "../actions";

class ChangePassword extends Component {
  handlechangepassword() {
    // this._http.post
    // (this.baseUrl + "/changepassword",
    // {
    //   username: username,
    //   oldpassword: oldpassword,
    //   newpassword: newpassword
    // })
    //   .subscribe(resp => {
    //     if (resp.response !== "success") {
    //       this.errorAlert = "block";
    //       this.error = resp.message || this.error;
    //     } else {
    //       this.errorAlert = "none";
    //       this.successAlert = "block";
    //       setInterval(() => {
    //         this.sec -= 1;
    //         if (this.sec === 0) {
    //           this.router.navigate(["/login"]);
    //         }
    //       }, 1000);
    //     }
    //   });
    this.setState({ submitted: false });
    const body = {
      oldpassword: this.state.oldpassword,
      newpassword:
        this.state.newpassword === this.state.confpassword
          ? this.state.confpassword
          : "",
      username: this.props.username
    };
    this.props.dispachChangePassword(body);
  }
  beginCountDown() {
    const i = setInterval(() => {
      let sec = this.state.sec;
      if (sec === 0) {
        clearInterval(i);
      } else {
        this.setState({ sec: sec - 1 });
      }
    }, 1000);
  }
  state = {
    oldpassword: "",
    newpassword: "",
    username: "",
    confpassword: "",
    sec: 5,
    submitted: false
  };
  oldPassRef = null;
  usernameRef = null;
  confPassRef = null;
  newPassRef = null;
  formRef = null;
  render() {
    return (
      <>
        {this.state.sec === 0 ? <Redirect to="/login" /> : <></>}
        <NavBar />
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-8 col-10 mx-auto form-box">
                <form
                  name="form"
                  className="col-lg-10 mx-auto"
                  ref={el => {
                    this.formRef = el;
                  }}
                  onSubmit={e => {
                    e.preventDefault();
                    this.setState({ submitted: true });
                    this.formRef.checkValidity() &&
                      this.handlechangepassword.bind(this)();
                  }}
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
                      disabled="disabled"
                      placeholder="username"
                      name="username"
                      onChange={e => {
                        e.preventDefault();
                      }}
                      value={this.props.username}
                    />
                  </div>
                  <div
                    className={`form-group col-12 ${
                      this.oldPassRef && !this.oldPassRef.checkValidity()
                        ? ""
                        : "has-error"
                    }`}
                  >
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Old Password"
                      name="oldpassword"
                      ref={el => {
                        this.oldPassRef = el;
                      }}
                      value={this.state.oldpassword}
                      onChange={e => {
                        this.setState({ oldpassword: e.target.value });
                      }}
                      required
                    />
                    {this.state.submitted &&
                      this.oldPassRef &&
                      !this.oldPassRef.checkValidity() && (
                        <div className="help-block error">
                          Old Password is required
                        </div>
                      )}
                  </div>
                  <div
                    className={`form-group col-12 ${
                      this.newPassRef && !this.newPassRef.checkValidity()
                        ? ""
                        : "has-error"
                    }`}
                  >
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                      name="newpassword"
                      ref={el => {
                        this.newPassRef = el;
                      }}
                      value={this.state.newpassword}
                      onChange={e => {
                        this.setState({ newpassword: e.target.value });
                      }}
                      required
                    />
                    {this.state.submitted &&
                      this.newPassRef &&
                      !this.newPassRef.checkValidity() && (
                        <div className="help-block error">
                          New Password is required
                        </div>
                      )}
                  </div>
                  <div
                    className={`form-group col-12 ${
                      this.confPassRef && !this.confPassRef.checkValidity()
                        ? ""
                        : "has-error"
                    }`}
                  >
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      name="confpassword"
                      ref={el => {
                        this.confPassRef = el;
                      }}
                      value={this.state.confpassword}
                      onChange={e => {
                        this.setState({ confpassword: e.target.value });
                      }}
                      required
                    />
                    {this.state.submitted &&
                      this.confPassRef &&
                      !this.confPassRef.checkValidity() && (
                        <div className="help-block error">
                          Confirm Passwords is required
                        </div>
                      )}
                    {this.state.newpassword !== this.state.confpassword && (
                      <div className="help-block error">
                        Passwords is do not match
                      </div>
                    )}
                  </div>
                  {this.props.error && this.props.error.length > 0 && (
                    <div
                      className="form-group alert alert-danger col-10 mx-auto"
                      role="alert"
                    >
                      {this.props.error}
                    </div>
                  )}
                  {this.props.success &&
                    (this.beginCountDown.bind(this)() || true) && (
                      <div
                        className="form-group alert alert-info col-10 mx-auto"
                        role="alert"
                      >
                        {`Password Changed. you will be redirected to login page in ${
                          this.state.sec
                        } seconds.`}
                      </div>
                    )}
                  <div className="form-group">
                    <button
                      disabled={this.props.loading}
                      className="btn btn-primary"
                    >
                      Change
                      {this.props.loading && (
                        <img alt="" src={actions.loading} />
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapPropsToStore = store => {
  return {
    error: store.Authentication.changePasswordError,
    loading: store.Authentication.changePasswordLoading,
    success: store.Authentication.changePasswordSuccess,
    username: store.Authentication.user && store.Authentication.user.username
  };
};
const mapDispatchToProps = dispach => {
  return {
    dispachChangePassword: cred => {
      dispach({ type: actions.CHANGEPASSWORD, payload: cred });
    }
  };
};
export default connect(
  mapPropsToStore,
  mapDispatchToProps
)(ChangePassword);
