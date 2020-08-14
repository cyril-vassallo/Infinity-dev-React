import React from "react";
import Spacer from "../../partials/spacer/Spacer";
import YoutubePlayer from "../../players/video/YoutubePlayer";

function Project5() {
  return (
    <>
      <div className="row my-5">
        <div className="col">
          <h4>Mini CRM React et Api REST - E-learning Symfony 4</h4>
          <p className="text-primary">Février à Mars 2020</p>
          <p>
            Il s'agissait d'apprendre à utiliser le framework Symfony 4 avec Api
            Platform pour la réalisation d'une Api REST et React pour la partie
            frontend. De loin le projet E-Learning le plus intéressant. Il m'a
            permis de comprendre et de mettre en application les concepts d'une
            api REST mais aussi de m'exercer sur React.
          </p>
        </div>
      </div>
      <div className="row my-5" id="details5" style={{ display: "none" }}>
        <div className="col-md-6">
          <h5 className="text-success">Environnement Technique</h5>
          <p>
            React, Symfony4, Api Platform, Swagger, Postman, PHP, Apache2,
            Javascript, SQL, l'ORM Doctrine, Bootstrap4, Html5/CSS, SCSS,
            Webpack encore.
          </p>
          <h5 className="text-success">Les fonctionnalités</h5>
          <ul>
            <li>Page de connexion</li>
            <li>Page page de gestion des clients</li>
            <li>Page page de gestion des factures</li>
            <li>Page page d'édition d'un client</li>
            <li>Page page d'édition d'une facture</li>
          </ul>
        </div>
        <div className="col-md-6">
          <YoutubePlayer
            title="Mini CRM React et Api REST"
            url="https://www.youtube-nocookie.com/embed/h6nb4x-t0Bk"
          />
        </div>
      </div>
      <Spacer spacerNumber="5" />
    </>
  );
}

export default Project5;
