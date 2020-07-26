import React, { Component } from 'react';
import "./footer.css";

class Footer extends Component {
    render() {
        return (
          <div className="footer">
            <div className="row">
              <div className="col text-center">
                <a href="#app">
                  <img src="img/rowup.png" alt="retour en haut" />
                </a>
                <p className="text-success">Retour en haut</p>
              </div>
            </div>
          </div>
        );
    }
}

export default Footer;