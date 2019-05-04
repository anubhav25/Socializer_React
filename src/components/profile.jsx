import NavBar from "./navbar";
import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    return (
      <>
        {console.log(this.props)}
        <NavBar />
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-10 mx-auto">
                <div className="container">
                  <div className="card">
                    <div className="row p-3">
                      <div className="col-lg-5 m-auto">
                        <img
                          alt=""
                          src={this.props.user.imglink}
                          className="rounded-circle profileImage"
                          style={{
                            objectFit: "cover",
                            width: 200,
                            height: 200
                          }}
                        />
                      </div>
                      <div className="col-lg-7">
                        <div className="card-block">
                          <h4 className="card-title">
                            {this.props.user.username}
                          </h4>
                          <p className="card-text">
                            {this.props.user.fullname}
                          </p>
                          <p className="card-text">
                            <i className="fa fa-envelope" />
                            &nbsp;
                            {this.props.user.email}
                          </p>
                          <p className="card-text">
                            <i className="fa fa-phone" />
                            &nbsp;
                            {this.props.user.phoneNo}
                          </p>
                          <p className="card-text">
                            <i className="fa fa-user" />
                            &nbsp;
                            {this.props.user.gender}
                          </p>
                          <p className="card-text">
                            <i className="fa fa-birthday-cake" />
                            &nbsp;
                            {(() => {
                              const date = new Date(this.props.user.dob);
                              return (
                                date.getDate() +
                                "-" +
                                (date.getUTCMonth() + 1) +
                                "-" +
                                date.getFullYear()
                              );
                            })()}
                          </p>
                          {this.props.user.descrition &&
                            this.props.user.descrition.length > 0 && (
                              <p className="card-text">
                                <i className="fa fa-file" />
                                {this.props.user.description}
                              </p>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
    user: (store.User && store.User.tempuser) || {}
  };
};

export default connect(mapPropsToStore)(Profile);
