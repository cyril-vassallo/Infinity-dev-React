import React, { Component } from "react";

class Map extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <h3 className="text-primary text-center">Map</h3>
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <p>Calculer l'itinéraire de chez moi à votre entreprise</p>
            <input
              className="form-control"
              type="text"
              placeholder="Votre ville"
              id="city"
            />
            <button className="btn btn-success" type="button">Calculer !</button>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default Map;
