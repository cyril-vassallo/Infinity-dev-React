import React from "react";
import Spacer from "../../partials/spacer/Spacer";

function Project3() {
    return (
      <>
        <div className="row my-5">
          <div className="col">
            <h4>E-learning Symfony 4 - Infinity-dev v1</h4>
            <p className="text-primary">Juillet à décembre 2019</p>
            <p>
              Il s'agissait d'apprendre à utiliser le framework Symfony 4. J'ai
              donc pris en main le framework en développant un site web exposant
              mes compétences techniques au travers d'un cv dynamique dont les
              données étaient récupérés dans une base de données MySQL de ma
              conception. Le site était plus une démonstration backend. Effet le
              frontend rendu avec twig et bootstrap4 était peu travaillé et
              disposait d'un javascript personnalisé très minimaliste. J'ai
              aussi fait l'experience du déploiement sur serveur mutualisé. Le
              site a finalement été remplacé par celui ci.
            </p>
          </div>
        </div>
        <div className="row my-5" id="details3" style={{ display: "none" }}>
          <div className="col-md-6">
            <h5 className="text-success">Environnement Technique</h5>
            <p>
              Symfony4, PHP, Apache2, Javascript, SQL, Jquery, Twig, l'ORM
              Doctrine, Bootstrap4, Interact.JS, parallax.js DataTables,
              Html5/CSS.
            </p>
            <h5 className="text-success">
              Les fonctionnalités que j'ai développé
            </h5>
            <ul>
              <li>Page cv static d'accueil du profil</li>
              <li>Page cv interactif</li>
              <li>Page liste des compétences</li>
              <li>Page téléchargement</li>
              <li>Une bandeau effet panoramique</li>
              <li>Des icons de techno en drag and drop</li>
              <li>Une mini base de données</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="text-success">Archives</h5>
            <video controls>
              <source src="media/infinity-dev-v1.mp4" type="video/webm" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
        <Spacer spacerNumber="3" />
      </>
    );
    
}

export default Project3;