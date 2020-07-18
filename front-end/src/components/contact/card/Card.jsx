import React, { Component } from "react";
import Scene from './scene/Scene'

class Card extends Component {
  state = {
    isClicked : false
  };

  handleClickForm = () => {
    const copyState = { ...this.state};
    copyState.isClicked = true;
    this.setState(copyState); 
    window.open("mailto:cyrilvssll34@gmail.com");
  }

  render() {
    return (
      <div>
        <div className="container my-5">
          <div className="row">
            <div className="col my-5">
              <div className="card text-center">
                <div className="card-header">
                  <h5 className="card-title">Contactez moi</h5>
                </div>
                <div className="card-body">
                  <p className="card-text text-center">
                    Vous pouvez me joindre par mail en utilisant votre client mail
                  </p>
                  <button
                    onClick={this.handleClickForm}
                    className="btn btn-big btn-primary text-center"
                  >
                    Me joindre !
                  </button>
                </div>
                <div className="card-footer text-muted text-center">
                  Les données saisies ne peuvent être utilisées
                  à des fins commerciales et ne seront utilisées que pour l'action
                  de mise en relation spécifiquement pour des sujets de mission ou
                  offre d'emploi.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
            <div className="row">
              <div className="col">
                <h3 className="text-primary text-center">Three.js</h3>
                <p className="text-center">Une solution 3D Web-GL pour navigateur</p>
              </div>
            </div>
            <div className="row">
              <div className="col my-5">
                <Scene/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Card;
