import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./navbar.scss";

class NavBar extends Component {
  state = { searchText: "" };
  focusOnSearch = false;
  title = "socializer";
  page = window.location.href || "";

  search(event) {
    event.preventDefault();
    let text = event.target.value;
    text = text.trim();
    if (text && text.length > 2) {
      text !== this.state.searchText && this.props.dispatchSearch(text);
      this.setState({ searchText: text });
    } else {
      this.setState({ searchText: "" });
    }
  }
  render() {
    return (
      <>
        {console.log("a", this.props)}
        <nav
          className="navbar navbar-expand-md navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <Link className="navbar-brand js-scroll-trigger" to="/home">
              {this.title}
            </Link>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu&nbsp;
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto pull-right">
                {this.props.user && (
                  <li className="nav-item">
                    <div className="searchDiv">
                      <form name="form searchBar">
                        <input
                          type="text"
                          autoComplete="off"
                          className="form-control lowercase pull-right"
                          placeholder="search"
                          name="search"
                          onKeyUp={this.search.bind(this)}
                        />
                      </form>
                      {this.props.items && this.props.items.length > 0 && (
                        <div className="searchResults">
                          {console.log(this.props)}
                          {this.props.items
                            .filter(() => {
                              return this.state.searchText.length > 2;
                            })
                            .map(item => {
                              return (
                                <div
                                  className="searchResultItem"
                                  key={item._id}
                                >
                                  <img
                                    alt=""
                                    src={actions.baseUri + item.thumbnail}
                                    height="35px"
                                    width="35px"
                                  />
                                  <div>
                                    <Link to={"/profile/" + item.username}>
                                      {item.username}
                                    </Link>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      )}
                    </div>
                  </li>
                )}

                {!this.props.user && !this.page.endsWith("/login") && (
                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="btn btn-outline-primary buttonIcon pull-right"
                    >
                      <span>LogIn&nbsp;</span>
                      <i className="fa fa-user" aria-hidden />
                    </Link>
                  </li>
                )}
                {!this.props.user && !this.page.endsWith("/register") && (
                  <li className="nav-item">
                    <Link
                      to="/register"
                      className="btn btn-outline-primary buttonIcon pull-right"
                    >
                      <span>SignUp&nbsp;</span>
                      <i className="fa fa-user-plus" aria-hidden />
                    </Link>
                  </li>
                )}
                {this.props.user && (
                  <li className="nav-item">
                    <Link
                      className="btn btn-outline-success buttonIcon pull-right"
                      to={"/profile/" + this.props.user.username}
                    >
                      <span className="buttonText">
                        {this.props.user.username} &nbsp;
                      </span>
                      <i className="fa fa-user" />
                    </Link>
                  </li>
                )}
                {this.props.user && this.props.user.admin && (
                  <li className="nav-item">
                    <Link
                      className="btn btn-outline-success buttonIcon pull-right"
                      id="requestsButton"
                      to="/admin/requests"
                    >
                      <span className="buttonText">Requests&nbsp;</span>
                      <i className="fa fa-user-plus" />
                    </Link>
                  </li>
                )}
                {this.props.user && !this.props.user.admin && (
                  <li className="nav-item">
                    <Link
                      className="btn btn-outline-success buttonIcon pull-right"
                      id="changepassword"
                      to="/changepassword"
                    >
                      <span className="buttonText">Change Password&nbsp;</span>
                      <i className="fa fa-key" />
                    </Link>
                  </li>
                )}
                {this.props.user && (
                  <li className="nav-item">
                    <Link
                      className="btn btn-outline-success buttonIcon pull-right"
                      to="/messages"
                    >
                      <span className="buttonText">messages&nbsp;</span>
                      <i className="fa fa-envelope" />
                    </Link>
                  </li>
                )}
                {this.props.user && (
                  <li className="nav-item">
                    <Link
                      className="btn btn-outline-success buttonIcon pull-right"
                      to="/logout"
                      onClick={this.props.dispatchLogout}
                    >
                      <span className="buttonText">logout&nbsp;</span>
                      <i className="fa fa-sign-out" />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
const mapPropsToStore = store => {
  return {
    items: store.User.searchItems,
    errMsg: store.User.errMsg,
    user: store.Authentication.user
  };
};
const mapDispatchToProps = dispach => {
  return {
    dispatchSearch: text => {
      dispach({ type: actions.SEARCH, payload: text });
    },
    dispatchLogout: text => {
      dispach({ type: actions.LOGOUT });
    }
  };
};
export default connect(
  mapPropsToStore,
  mapDispatchToProps
)(NavBar);
