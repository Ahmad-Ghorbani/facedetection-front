/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navigation.css";
import profileImage from "./icon-profile-8.jpg";

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const Navigation = ({ onRouteChange, isSignedin }) => {
  if (isSignedin) {
    return (
      <div>
        <nav className="Navigation">
          {/* <p className="letin" onClick={() => onRouteChange("signin")}>
            Sign out
          </p> */}
          <img
            className="signout dropbtn"
            onClick={() => myFunction()}
            // onRouteChange("signin")
            src={profileImage}
            alt="profile "
          />
          <div id="myDropdown" className="dropdown-content">
            <a onClick={() => onRouteChange("signin")}>Sign out</a>
            {/* <a>Your profile</a> */}
          </div>
        </nav>
      </div>
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
