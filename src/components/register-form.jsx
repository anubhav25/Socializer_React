import React, { Component } from "react";
import "./registerform.scss";

class RegisterForm extends Component {
  profilePicRef = null;
  imgPreviewRef = null;
  imageSelected = false;
  model = { gender: "male" };
  handleFile(e) {
    const fileList = e.target.files;
    if (fileList.length === 0) {
      this.imgPreviewRef.style.transform = "rotate(0deg)";
      this.model.rotation = 0;
      this.imageSelected = true;
      const file = fileList[0];
      this.model.file = file;
      const reader = new FileReader();
      reader.onload = function(ev) {
        this.imgPreviewRef.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  rotate90() {
    const ang = parseInt(this.model.rotation, 0) || 0;
    this.imgPreviewRef.style.transform = "rotate(" + (90 + ang) + "deg)";
    this.model.rotation = (90 + ang) % 360;
  }

  gengerSelect(e, value) {
    this.isMale = value === "male";
    this.model.gender = value;
  }

  errorMessage = "Server Error.\n Please try after some time.";
  loading = false;
  emailvalid;
  phonevalid;
  emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneRegEx = /^\d{10}$/;
  registerError = "none";
  registerInfo = "none";
  isMale = true;
  imageSelected = "none";

  usernameTooShort = false;
  userAlredyExists = false;
  emailAlredyExists = false;
  phoneAlredyExists = false;

  handleFile(event, imgPreview) {}

  checkUsername(value) {
    this.usernameTooShort = value.length < 6;
    if (!this.usernameTooShort) {
      this._validaterService.usernameValid(value).subscribe(
        resp => {
          this.userAlredyExists = !resp.response;
          if (resp.response) {
            this.model.username = value;
          }
        },
        err => {}
      );
    }
  }

  avoidSpaceUsername(event) {
    if (event.which === 32) {
      return false;
    }
    this.usernameTooShort = false;
    this.userAlredyExists = false;
  }
  checkEmail(value) {
    const a = value.match(this.emailRegEx);
    if (a === null) {
      this.emailvalid = false;
    } else {
      this.emailvalid = true;
      this._validaterService.emailValid(value).subscribe(
        resp => {
          this.emailAlredyExists = !resp.response;
          if (resp.response) {
            this.model.email = value;
          }
        },
        err => {}
      );
    }
  }

  avoidSpaceEmail(event) {
    if (event.which === 32) {
      return false;
    }
    this.emailAlredyExists = false;
  }

  checkPhone(value) {
    const a = value.match(this.phoneRegEx);
    if (a === null) {
      this.phonevalid = false;
    } else {
      this.phonevalid = true;
      this._validaterService.phoneNoValid(value).subscribe(
        resp => {
          this.phoneAlredyExists = !resp.response;
          if (resp.response) {
            this.model.phoneNo = value;
          }
        },
        err => {}
      );
    }
  }

  avoidSpacePhone(event) {
    this.phoneAlredyExists = false;
  }

  nextPage() {
    if (this.model.username && this.model.email && this.model.phoneNo) {
      if (
        this.emailvalid &&
        this.phonevalid &&
        !this.userAlredyExists &&
        !this.usernameTooShort
      ) {
        this.lastpage = "block";
        this.firstpage = "none";
        this.infopage = "none";
      }
    } else {
      this.emailvalid = this.model.email && true;
      this.phonevalid = this.model.phoneNo && true;
      this.usernameTooShort = this.model.phoneNo
        ? this.model.phoneNo.length > 6
        : true;
    }
  }

  prevPage() {
    this.lastpage = "none";
    this.firstpage = "block";
    this.infopage = "none";
  }

  register() {
    this.registerError = "none";
    this.registerInfo = "none";

    this.loading = true;

    const body: any = new FormData();

    for (const i of Object.keys(this.model)) {
      if (i !== "file") {
        body.append(i, this.model[i]);
      }
    }
    if (this.model.file) {
      body.append("file", this.model.file, this.model.file.name);
      delete this.model.file;
    }

    console.log(body);

    this._authenticateService.register(body).subscribe(
      resp => {
        console.log(resp);
        this.lastpage = "none";
        this.firstpage = "none";
        this.infopage = "block";
        if (resp.response === "success") {
          this.registerError = "none";
          this.registerInfo = "block";
        } else {
          this.errorMessage = resp.message || this.errorMessage;
          this.registerError = "block";
          this.registerInfo = "none";
        }
      },
      err => {
        console.log(err);
        this.lastpage = "none";
        this.firstpage = "none";
        this.infopage = "block";
        this.registerError = "block";
        this.registerInfo = "none";
      }
    );
  }

  render() {
    return (
      <>
        <form name="form" encType="multipart/form-data" noValidate>
          {/*(ngSubmit)="f.form.valid && register()" */}
          <div>
            <div className="form-group col-12">
              {/*[ngClassName]="{ 'has-error': f.submitted }"*/}
              <input
                ref={a => {
                  this.profilePicRef = a;
                }}
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                onChange={this.handleFile.bind(this)}
              />
              {/*'handleFile($event,imgPreview)'*/}
              <div className="outerBox mx-auto">
                <img
                  src="/assets/img/default.png"
                  ref={a => {
                    this.imgPreviewRef = a;
                  }}
                  className="rounded-circle profileImage"
                  alt="Select Your Image"
                  height="125px"
                  width="125px"
                />
                <div className="overlay">
                  <div
                    className="centerMessage"
                    onClick={() => {
                      this.profilePicRef && this.profilePicRef.click();
                    }}
                  >
                    <label> Upload Image </label>
                  </div>
                  {this.imageSelected && (
                    <div
                      className="cornerButton"
                      onClick={this.rotate90.bind(this)}
                    >
                      <i
                        className="fa fa-repeat"
                        style={{ fontSize: "25px" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-12 mx-auto">
              <label>
                <strong>Username </strong>
              </label>
            </div>
            <div className="form-group col-12">
              {/* [ngClassName]="{ 'has-error': f.submitted && !username.valid }">*/}

              <input
                type="text"
                className="form-control lowercase"
                placeholder="Username"
                name="username"
                required
              />
              <div className="help-block error">Username is required</div>
              <div className="help-block error">
                Username already taken. Try another One
              </div>
              <div className="help-block error">Username too short</div>
            </div>
            <div className="col-12 mx-auto">
              <label>
                <strong>E-Mail </strong>
              </label>
            </div>
            <div className="form-group col-12">
              <input
                type="email"
                className="form-control lowercase"
                placeholder="E-Mail"
                name="email"
                required
              />

              <div className="help-block error">email is required</div>
              <div className="help-block error">enter valid email</div>
              <div className="help-block error">
                Email already registered. Try another One
              </div>
            </div>
            <div className="col-12 mx-auto">
              <label>
                <strong>Phone Number </strong>
              </label>
            </div>
            <div className="form-group col-12">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                name="phoneNo"
                required
              />

              <div className="help-block error">Phone Number is required</div>
              <div className="help-block error">enter valid phone number</div>
              <div className="help-block error">
                Phone already registered. Try another One
              </div>
            </div>
            <div className="form-group col-12">
              <button className="btn btn-primary" type="submit">
                Next <i className="fa fa-angle-right" />
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default RegisterForm;
