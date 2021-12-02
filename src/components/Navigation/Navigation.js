import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedin }) => {
  if (isSignedin) {
    return (
      <nav className="Navigation">
        <p
          className="f3 link dim black underline pa3 pointer"
          onClick={() => onRouteChange("signin")}
        >
          Sign out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="Navigation">
        <p
          className="f3 link dim black underline pa3 pointer"
          onClick={() => onRouteChange("Register")}
        >
          Register
        </p>
        <p
          className="f3 link dim black underline pa3 pointer"
          onClick={() => onRouteChange("signin")}
        >
          Sign in
        </p>
      </nav>
    );
  }
};

export default Navigation;
