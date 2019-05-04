import React, { Component } from "react";

class RegisterFormPage2 extends Component {
  state = {};
  render() {
    return (
      <>
        <form>
          <div>
            <div class="col-12 mx-auto">
              <label>
                <strong>Full Name</strong>
              </label>
            </div>
            <div class="form-group col-12">
              {/* [ngClass]="{ 'has-error': f.submitted && !fullname.valid }">*/}
              <input
                type="text"
                class="form-control"
                placeholder="Full Name"
                name="fullname"
                required
              />
              {/*[(ngModel)]="model.fullname" #fullname="ngModel" */}
              <div class="help-block error">Name is required</div>{" "}
              {/*} *ngIf="f.submitted && !fullname.valid"*/}
            </div>
            <div class="col-12 mx-auto">
              <label>
                <strong>Gender </strong>
              </label>
            </div>
            <div class="form-group col-12">
              <div class="btn-group" role="group">
                {/*(click)="radioClick('male')"*/}
                <button
                  type="button"
                  class="btn btn-outline-light active"
                  name="gender"
                  id="optionMale"
                  value="male"
                >
                  Male <i class="fa fa-male" />
                </button>
                <button
                  type="button"
                  class="btn btn-outline-light"
                  name="gender"
                  id="optionFemale"
                  value="female"
                >
                  Female <i class="fa fa-female" />
                </button>
              </div>
            </div>
            <div class="col-12 mx-auto">
              <label>
                <strong>Date Of Birth</strong>
              </label>
            </div>
            <div class="form-group col-12">
              {" "}
              {/*} [ngClass]="{ 'has-error': f.submitted && !dob.valid }">*/}
              <input
                onfocus="(this.type='date')"
                class="form-control"
                placeholder="Date Of Birth"
                name="dob"
                required
              />
              {/*[(ngModel)]="model.dob"*/}
              <div class="help-block error">Date of Birth is required</div>
              {/**ngIf="f.submitted && !dob.valid"*/}
            </div>
            <div class="col-12 mx-auto">
              <label>
                <strong>Description</strong>
              </label>
            </div>
            <div class="form-group col-12">
              <textarea
                name="description"
                class="col-12 form-control"
                rows="3"
                placeholder="Description"
              />
            </div>

            <div class="form-group col-12">
              <button class="btn btn-primary col-md-4 col-6" type="button">
                <i class="fa fa fa-angle-left" /> Previous
              </button>

              {/*[disabled]="loading"*/}
              <button type="submit" class="btn btn-primary col-md-4 col-6">
                register <i class="fa fa-user-plus" />
                {/**ngIf="loading" */}
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              </button>
            </div>
          </div>
          <div>
            {/*[style.display]="infopage"*/}
            <div class="alert alert-info col-10 mx-auto" role="alert">
              {" "}
              {/* [style.display]='registerInfo'*/}
              Request Submitted.
              <br /> You will recieve a email with your password when admin will
              approve your request.
            </div>
            <div class="alert alert-danger col-10 mx-auto" role="alert">
              {/* [style.display]='registerInfo'*/}
              {/*errorMessage*/ ""}
            </div>
            <div>
              <a href="/login" class="btn btn-primary">
                LogIn
                <i class="fa fa-user" aria-hidden="true" />
              </a>
              <a href="/register" class="btn btn-primary">
                SignUp
                <i class="fa fa-user-plus" aria-hidden="true" />
              </a>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default RegisterFormPage2;
