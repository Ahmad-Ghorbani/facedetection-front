import React from "react";
import "./Guest.css";

const Guest = ({ onRouteChange }) => {
  return (
    <div className="guest">
      <div className="float_guest" onClick={() => onRouteChange("register")}>
        Register
      </div>
      <div className="guestName">{`Hi Guest`}</div>
      <div className="guestEnter">{`Enter an image url to detect the faces`}</div>
    </div>
  );
};

export default Guest;
