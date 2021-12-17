import React from "react";
import { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
// import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Particles from "react-tsparticles";
import { particles } from "./components/particles/particles";

const initialState = {
  link: "",

  boxArray: [],
  route: "signin",
  isSignedin: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  calculateFaceLocation = (response) => {
    const boxArray = [];
    for (let index in JSON.parse(response, null, 2).outputs[0].data.regions) {
      boxArray[index] = JSON.parse(response, null, 2).outputs[0].data.regions[
        index
      ].region_info.bounding_box;
    }

    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    this.setState({ boxArray: boxArray });
    const imageContainer = document.getElementById("parent-div");
    let left, right, top, bottom;

    for (let index in boxArray) {
      left = boxArray[index].left_col * width;
      top = boxArray[index].top_row * height;
      right = width - boxArray[index].right_col * width;
      bottom = height - boxArray[index].bottom_row * height;
      let newDiv = document.createElement("div");
      newDiv.setAttribute("class", "bounding-box");
      newDiv.setAttribute(
        "style",
        `inset: ${top}px ${right}px ${bottom}px ${left}px;`
      );
      imageContainer.appendChild(newDiv);
    }
  };

  faceBox = (value) => {
    this.setState({ box: value });
  };

  imageLink = (event) => {
    let DetectedFaces = document.getElementsByClassName("bounding-box");

    if (DetectedFaces.length > 0) {
      for (let index = DetectedFaces.length - 1; index >= 0; index--) {
        DetectedFaces[index].remove();
      }
    }
    this.setState({ link: event.target.value });
  };

  onRouteChange = (route) => {
    if (route === "home") this.setState({ isSignedin: true });
    else {
      this.setState(initialState);
      this.setState({ isSignedin: false });
    }
    this.setState({ route: route });
  };

  submitClicked = () => {
    fetch("https://fast-mountain-98393.herokuapp.com/imageUrl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        link: this.state.link,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          fetch("https://fast-mountain-98393.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => {
              return response.json();
            })
            .then((data) =>
              this.setState(Object.assign(this.state.user, { entries: data }))
            )
            .catch(console.log);
        }
        this.faceBox(this.calculateFaceLocation(result));
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particles} />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedin={this.state.isSignedin}
        />
        {this.state.route === "home" ? (
          <div>
            {/* <Logo /> */}
            <Rank
              userName={this.state.user.name}
              userEntries={this.state.user.entries}
            />
            <ImageLinkForm
              imageLink={this.imageLink}
              submitClicked={this.submitClicked}
            />
            <FaceRecognition source={this.state.link} />
          </div>
        ) : this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
      </div>
    );
  }
}

export default App;
