import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Card extends Component {

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
            <NavLink to="/demo">
              <button className="btn btn-success btn-lg">
                Lancer la démo 3D
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
