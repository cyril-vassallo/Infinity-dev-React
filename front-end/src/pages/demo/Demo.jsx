import React, { Component } from "react";
import Navigation from "../../components/partials/nav/Navigation";
import Scene from "../../components/three/scene/Scene";

class Demo extends Component {
  state = {};
  render() {
    return (
      <>
        <Navigation />
        <Scene />
      </>
    );
  }
}

export default Demo;
