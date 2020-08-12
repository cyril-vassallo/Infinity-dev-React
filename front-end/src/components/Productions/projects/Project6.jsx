import React from "react";
import Spacer from "../../partials/spacer/Spacer";
import YoutubePlayer from "../../players/video/YoutubePlayer";

function Project6() {
  return (
    <>
      <div className="row my-5">
        <div className="col">
          <h4>Infinity Booking - E-learning Symfony 4 </h4>
          <p className="text-primary">Octobre 2019</p>
          <p>
            Il s'agissait d'apprendre à utiliser le framework Symfony 4. En
            E-Learning réalisation d'un site de réservation de chambres. Parmis
            mes projets d'E-Learning il est le plus complet. Il m'a permis
            d'aboutir à la maîtrise de Symfony 4 et un perfectionnement en
            bootstrap 4.
          </p>
        </div>
      </div>
      <div className="row my-5" id="details6" style={{ display: "none" }}>
        <div className="col-md-6">
          <h5 className="text-success">Environnement Technique</h5>
          <p>
            Symfony4, PHP, Apache2, Javascript, SQL, Jquery, Twig, l'ORM
            Doctrine, Bootstrap4, Html5/CSS, SCSS, Webpack encore.
          </p>
          <h5 className="text-success">Les fonctionnalités</h5>
          <ul>
            <li>Page de connexion utilisateur</li>
            <li>Page d'accueil</li>
            <li>Page des annonces</li>
            <li>Page d'une annonce</li>
            <li>Page du profil</li>
            <li>Page de modification du profil utilisateur </li>
            <li>Page réservation</li>
            <li>Page de consultation de la réservation</li>
            <li>Page historique des réservations de l'utilisateur</li>
          </ul>
        </div>
        <div className="col-md-6">
          <YoutubePlayer
            title="Infinity Booking"
            url="https://www.youtube-nocookie.com/embed/s9Nb5FkLNkM"
          />
        </div>
      </div>
      <Spacer spacerNumber="6" />
    </>
  );
}


export default Project6;


