import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ source }) => {
  return (
    <div className="imagetoboDetected">
      <div className="relative" id="parent-div">
        <img id="inputImage" src={source} alt="" />
      </div>
    </div>
  );
};

export default FaceRecognition;
