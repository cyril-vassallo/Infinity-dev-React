import React, { Component } from "react";


class Card3d extends Component {

  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col">
            <h3 className="text-primary container">Three.js</h3>
            <p className="container">Une solution 3D Web-GL pour navigateur</p>
          </div>
        </div>
        <div className="row">
          <div className="col my-5 text-center">
            <a href="/demo">
              {" "}
              <button className="btn btn-success btn-lg">
                Lancer la démo 3D
              </button>
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Card3d;
