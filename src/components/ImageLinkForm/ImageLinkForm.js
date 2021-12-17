import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ imageLink, submitClicked }) => {
  return (
    <div className="imageForm_parent">
      {/* <p className="f3">
        This magic brain will detect faces in your pictures. Give it a try.
      </p> */}
      {/* <div className="image_parent"> */}
      <div className="imageForm">
        <input
          type="text"
          placeholder="Enter the image url"
          className="image_input"
          onChange={imageLink}
        />
        <button onClick={submitClicked} className="button_image">
          Detect
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ImageLinkForm;
