import React, { Component } from "react";
import "./login.scss";

class LoginForm extends Component {
  title = "Socializer";
  loading = false;
  wrongPasswordAlert = "";
  username = "";
  password = "";
  usernameRef = null;
  passwordRef = null;
  login() {
    this.loading = true;
    this.wrongPasswordAlert = "none";
    setTimeout(() => {
      if (this.username === "anubhav" && this.password === "a") {
        this.wrongPasswordAlert = "none";
        this.loading = false;
      } else {
        this.loginError = "Wrong Password";
        this.wrongPasswordAlert = "block";
      }
      //       this.router.navigate(['/home']);
    }, 3000);
    // this._authenticateService.login(this.model.username, this.model.password)
    //   .subscribe(resp => {
    //     console.log(resp);
    //     console.log(resp.message);
    //     if (resp.response !== 'success') {
    //       this.loginError = resp.message;
    //       this.wrongPasswordAlert = 'block';
    //     } else {
    //       this.wrongPasswordAlert = 'none';
    //       this.router.navigate(['/home']);
    //     }
    //     this.loading = false;
    //     // this.router.navigate(['/home']);
    //   }, err => {
    //     console.log(err);
    //     this.loginError = ' Server Error ';
    //     this.loading = false;
    //   });
  }
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
                onSubmit={this.login}
                noValidate
              >
                <div
                  className={`form-group col-12 ${
                    this.usernameRef && this.usernameRef.checkValidity()
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
                    value={this.username}
                    onChange={e => (this.username = e.target.value)}
                    required
                  />
                  {this.usernameRef && this.usernameRef.checkValidity() && (
                    <div className="help-block error">Username is required</div>
                  )}
                </div>
                <div
                  className={`form-group col-12 ${
                    this.passwordRef && this.passwordRef.checkValidity()
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
                    value={this.password}
                    onChange={e => (this.password = e.target.value)}
                    required
                  />
                  {this.passwordRef && this.passwordRef.checkValidity() && (
                    <div className="help-block error">Password is required</div>
                  )}
                </div>
                {this.loginError && this.loginError.length > 0 && (
                  <div
                    styles="display:none"
                    className="form-group alert alert-danger col-10 mx-auto"
                    role="alert"
                  >
                    {this.loginError}
                  </div>
                )}
                <div className="form-group">
                  <button
                    type="submit"
                    disabled={this.loading}
                    className="btn btn-primary"
                  >
                    Login
                    {this.loading && (
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
export default LoginForm;
//[style.display]="wrongPasswordAlert"