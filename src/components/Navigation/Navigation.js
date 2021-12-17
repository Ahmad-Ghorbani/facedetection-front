import React from "react";
import "./Navigation.css";
import profileImage from "./icon-profile-8.jpg";

const Navigation = ({ onRouteChange, isSignedin }) => {
  if (isSignedin) {
    return (
      <nav className="Navigation">
        {/* <p className="letin" onClick={() => onRouteChange("signin")}>
          Sign out
        </p> */}
        <img
          className="signout"
          onClick={() => onRouteChange("signin")}
          src={profileImage}
          alt="profile "
        />
      </nav>
    );
  } else {
    return (isSignedin = false);
    // <nav className="Navigation">
    //   <p className="letin" onClick={() => onRouteChange("Register")}>
    //     Register
    //   </p>
    //   <p className="letin" onClick={() => onRouteChange("signin")}>
    //     Sign in
    //   </p>
    // </nav>
  }
};

export default Navigation;
