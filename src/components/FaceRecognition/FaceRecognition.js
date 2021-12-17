import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ source }) => {
  return (
    <div className="imagetoboDetected">
      <div className="relative" id="parent-div">
        <img className="image" id="inputImage" src={source} alt="" />
      </div>
    </div>
  );
};

export default FaceRecognition;
