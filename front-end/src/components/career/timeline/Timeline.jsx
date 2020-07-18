import React, { Component } from 'react';
import './timeline.css'

class Timeline extends Component {
    state = {  }
    render() {
        return (
          <div className="timeline container my-5">
            <div className="row left my-5">
              <div className="col-md-6">
                <h3>DÉVELOPPEUR WEB FULLSTACK PHP ET JAVASCRIPT</h3>
                <p className="font-weight-bolder text-primary">
                  Sept-Dec 2019 Emity
                </p>
                <p>
                  Refonte du back-office administration de la plateforme web{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.link.wepub.fr/webmanager/index.php?page=acceuil"
                  >
                    EManager
                  </a>
                </p>
                <ul>
                  <li>Conception, maquettage, étude des fonctionnalités</li>
                  <li>Amélioration de la base de données existante</li>
                  <li>Backend avec un framework PHP MVC et MySQL</li>
                  <li>Frontend sur Jquery, Ajax, Bootstrap 4, Twig 3</li>
                </ul>
                <p className="col"></p>
              </div>
            </div>
            <div className="row right my-5">
              <div className="col-md-6"></div>
              <div className="col">
                <h3>TECHNICIEN SYSTEMES ET RESEAUX </h3>
                <p className="font-weight-bolder text-primary">
                  2006-2018 Canon, ECM, Engie, Verifone
                </p>
                  <p>Installation et maintenance </p>
                  <ul>
                    <li>
                      Installation et maintenance de systèmes informatiques et
                      industriels
                    </li>
                    <li>
                      Programmation en langage C de platines et de
                      microcontrôleurs.
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        );
    }
}

export default Timeline;