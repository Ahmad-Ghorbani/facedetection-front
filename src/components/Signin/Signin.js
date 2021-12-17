import React, { Component } from "react";
import "./Signin.css";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      invalidCredentials: "",
    };
  }

  onEmailChange = (event) => {
    // this.setState({ invalidCredentials: "" });
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    // this.setState({ invalidCredentials: "" });
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignin = () => {
    fetch("https://fast-mountain-98393.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        } else if (
          user === "incorrect form submission" ||
          user === "wrong credentilas"
        ) {
          this.setState({ invalidCredentials: user });
        }
      });
  };

  render() {
    return (
      <article className="signin_parent">
        <main className="signin_div">
          <div className="forms_div">
            {/* <div className="signin_header">
              <legend>Sign In</legend>
            </div> */}
            <div className="credentials--div">
              {/* <label className="label" htmlFor="email-address">
                Email
              </label> */}
              <input
                placeholder="Email"
                className="input--field"
                type="email"
                name="email-address"
                id="email-address"
                onChange={this.onEmailChange}
              />
            </div>
            <div className="credentials--div">
              {/* <label className="label" htmlFor="password">
                Password
              </label> */}
              <input
                placeholder="Password"
                className="input--field"
                type="password"
                name="password"
                id="password"
                onChange={this.onPasswordChange}
              />
            </div>
            <div className="button--div">
              <input
                onClick={this.onSubmitSignin}
                className="button"
                type="submit"
                value="Sign In"
              />
            </div>
            <div className="register--div">
              <h4>
                Don't have an account?{" "}
                <span
                  className="register_route"
                  onClick={() => this.props.onRouteChange("register")}
                >
                  Register
                </span>
              </h4>
            </div>
            {this.state.invalidCredentials !== "" ? (
              <div className="invalidCredentials">
                <p>{this.state.invalidCredentials}</p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
