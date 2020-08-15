import React from "react";
import Spacer from "../../spacer/Spacer";
import YoutubePlayer from "../../players/video/YoutubePlayer";

function Project3() {
    return (
      <>
        <div className="row my-5">
          <div className="col">
            <h4> Infinity-dev v1 - E-learning Symfony 4</h4>
            <p className="text-primary">Juillet à décembre 2019</p>
            <p>
              Il s'agissait d'apprendre à utiliser le framework Symfony 4. J'ai
              donc pris en main le framework en développant un site web exposant
              mes compétences techniques au travers d'un cv dynamique dont les
              données étaient récupérés dans une base de données MySQLde ma
              conception. Ce site était plutôt une démonstration backend. En
              effet le frontend rendu avec twig et bootstrap 4 était peu
              travaillé et disposait d'un javascript personnalisé très
              minimaliste. J'ai aussi fait l'expérience du déploiement sur
              serveur mutualisé. Ce site a finalement été remplacé par celui.
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
            <YoutubePlayer
              title="Infinity-dev v1"
              url="https://www.youtube-nocookie.com/embed/c9_eFc9B_8c"
            />
          </div>
        </div>
        <Spacer spacerNumber="3" />
      </>
    );
    
}

export default Project3;

