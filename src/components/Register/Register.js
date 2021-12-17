import { Component } from "react";
import React from "react";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RegisterName: "",
      RegisterEmail: "",
      RegisterPassword: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ RegisterName: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ RegisterEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ RegisterPassword: event.target.value });
  };

  onSubmitRegister = () => {
    fetch("https://fast-mountain-98393.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.RegisterName,
        email: this.state.RegisterEmail,
        password: this.state.RegisterPassword,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <article className="register_parent">
        <main className="signin_div">
          <div className="forms_div">
            {/* <div className="register_header">
              <legend className="f1 fw6 ph0 mh0 center">Register</legend>
            </div> */}
            <div className="credentials--div">
              {/* <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label> */}
              <input
                className="input--field"
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                onChange={this.onNameChange}
              />
            </div>
            <div className="credentials--div">
              {/* <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label> */}
              <input
                className="input--field"
                placeholder="Email"
                type="email"
                name="email-address"
                id="email-address"
                onChange={this.onEmailChange}
              />
            </div>
            <div className="credentials--div">
              {/* <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label> */}
              <input
                className="input--field"
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                onChange={this.onPasswordChange}
              />
            </div>
            <div className="button--div">
              <input
                onClick={this.onSubmitRegister}
                className="button"
                type="submit"
                value="Register"
              />
            </div>
            <div className="register--div">
              <h4>
                Already have an account?{" "}
                <span
                  onClick={() => this.props.onRouteChange("signin")}
                  className="signin_route"
                >
                  Sign in
                </span>
              </h4>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
