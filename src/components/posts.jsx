import React, { Component } from "react";
import Post from "./post";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./login.scss";
import * as actions from "../actions";

class Posts extends Component {
  me = {};
  state = { postText: "" };
  postTextRef = null;
  file = null;
  render() {
    return (
      <>
        <div class="row">
          <div class="col-md-8 mx-auto mb-5">
            <label>Add a new post</label>
            <textarea
              name="post"
              placeholder="add new post here"
              style={{ width: "100%" }}
              rows="2"
              ref={el => {
                this.postTextRef = el;
              }}
              value={this.state.postText}
              onChange={e => {
                this.setState({ postText: e.target.value });
              }}
            />
            {this.file && <label>Slected File : {this.file.name}</label>}
            <div>
              <button class="btn btn-primary">
                <i class="fa fa-camera" /> Image
              </button>
              {/*(click)='selectFile(imgInput)'*/}
              <button class="btn btn-primary">
                <i class="fa fa-file" /> File
              </button>
              {/* (click)='selectFile(fileInput)'*/}
            </div>
            <input
              type="file"
              id="imageInput"
              style={{ display: "none" }}
              accept="image/*"
            />
            {/*(change)='hadleFile($event)'*/}
            <input type="file" id="fileInput" style={{ display: "none" }} />
            {/*(change)='hadleFile($event)'*/}
            <div class="mt-2">
              <button class="btn btn-warning" onClick={this.post}>
                <i class="fa fa-send-o"> POST</i>
              </button>
            </div>
          </div>
        </div>

        {this.props.posts.map(post => {
          return (
            <div class="col-md-8 mx-auto">
              <Post post={post} me={this.me} />
            </div>
          );
        })}
      </>
    );
  }
}
const mapPropsToStore = store => {
  return {};
};
const mapDispatchToProps = dispach => {
  return {};
};
export default connect(
  mapPropsToStore,
  mapDispatchToProps
)(Posts);
