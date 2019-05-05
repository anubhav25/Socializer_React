import React, { Component } from "react";
import "./login.scss";
import * as actions from "../actions";

class Post extends Component {
  state = {};
  liked = this.props.post.likes.includes(this.props.me._id);
  render() {
    return (
      this.props.post &&
      this.props.me && (
        <>
          <div class="card mt-2" style={{ width: "100%" }}>
            <label class="float-left mx-3">
              <b>{this.props.post.username}</b>
              {(this.props.post.author === this.props.me._id ||
                this.props.me.admin) && (
                <button class="float-right" onClick={this.delete.bind(this)}>
                  <i class="fa fa-trash" />
                </button>
              )}
            </label>
            {this.props.post.imagepath && (
              <img
                class="card-img-top"
                src={this.props.post.imagepath}
                alt=""
                style={{ width: "100%" }}
              />
            )}
            {this.props.post.imagepath && (
              <a
                href={
                  this.actios.baseUri +
                  "\\" +
                  this.props.post.imagepath +
                  "\\" +
                  this.props.post.filename
                }
              >
                {this.props.post.filename}
              </a>
            )}
            {this.props.post.filepath && (
              <a
                href={
                  this.actions.baseUri +
                  "\\" +
                  this.props.post.filepath +
                  "\\" +
                  this.props.post.filename
                }
              >
                {this.props.post.filename}
              </a>
            )}
            <div class="card-body">
              {this.props.post.text && (
                <p class="card-text">{this.props.post.text}</p>
              )}
            </div>
            {this.props.post.comment &&
              this.props.post.comment.map(cmnt => {
                return (
                  <label class="float-left mx-3">
                    <b>{cmnt.author} : </b>
                    {cmnt.comment}
                  </label>
                );
              })}
            <div>
              <input
                type="text"
                placeholder="comment"
                style={{ width: "90%" }}
                value={this.state.cmtText}
                onChange={e => {
                  this.setState({ cmtText: e.target.value });
                }}
              />
              {!this.liked && (
                <button
                  class="btn btn-primary float-left m-2"
                  onClick={this.like.bind(this)}
                >
                  Like
                </button>
              )}
              {this.liked && (
                <button
                  class="btn btn-warning float-left m-2"
                  onClick={this.unlike.bind(this)}
                >
                  UnLike
                </button>
              )}
              <button
                class="btn btn-primary float-right m-2"
                onClick={this.comment.bind(this)}
              >
                Comment
              </button>
            </div>
          </div>
        </>
      )
    );
  }
}

export default Post;
