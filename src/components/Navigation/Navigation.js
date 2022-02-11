/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navigation.css";
import profileImage from "./icon-profile-8.jpg";

function signOut() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
onclick = function (event) {
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
  if (event.target.matches(".closeProfile")) {
    dropdowns = document.getElementsByClassName("profileDropdown-content");

    for (i = 0; i < dropdowns.length; i++) {
      openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("showProfile")) {
        openDropdown.classList.remove("showProfile");
      }
    }
  }
};

// onclick = function (event) {
//   if (!event.target.matches(".profileDropbtn")) {
//     var dropdowns = document.getElementsByClassName("profileDropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("showProfile")) {
//         openDropdown.classList.remove("showProfile");
//       }
//     }
//   }
// };

// function onProfileUpdate() {
//   document.getElementById("profileDropdown").classList.toggle("showProfile");
// }

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
            onClick={() => signOut()}
            // onRouteChange("signin")
            src={profileImage}
            alt="profile "
          />
          <div id="myDropdown" className="dropdown-content">
            <a onClick={() => onRouteChange("signin")}>Sign out</a>
            {/* <a onClick={() => onProfileUpdate()} className="profileDropbtn">
              Your profile
            </a> */}
          </div>
          <div id="profileDropdown" className="profileDropdown-content">
            <div className="rightDiv">
              <p className="closeProfile">Close</p>
            </div>
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
