import React, { Component } from "react";
import Scene from "./scene/Scene";

class Card3d extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h3 className="text-primary text-center">Three.js</h3>
            <p className="text-center">
              Une solution 3D Web-GL pour navigateur
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col my-5">
            <Scene />
          </div>
        </div>
      </div>
    );
  }
}

export default Card3d;
