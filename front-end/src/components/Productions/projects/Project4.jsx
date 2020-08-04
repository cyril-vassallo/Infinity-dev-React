import React from "react";
import Spacer from "../../partials/spacer/Spacer";
import YoutubePlayer from "../../players/video/YoutubePlayer";

function Project4() {
  return (
    <>
      <div className="row my-5">
        <div className="col">
          <h4>E-learning Symfony 4 - Infinity Booking Adminstration</h4>
          <p className="text-primary">Décembre 2019</p>
          <p>
            Il s'agissait d'approfondir la maÎtrise du framework Symfony 4 en
            réalisant le back-office du site Infinity Booking.
          </p>
        </div>
      </div>
      <div className="row my-5" id="details4" style={{ display: "none" }}>
        <div className="col-md-6">
          <h5 className="text-success">Environnement Technique</h5>
          <p>
            Symfony4, PHP, Apache2, Javascript, SQL, Jquery, Twig, l'ORM
            Doctrine, Bootstrap4, Html5/CSS, SASS, Webpack encore.
          </p>
          <h5 className="text-success">Les fonctionnalités</h5>
          <ul>
            <li>Page de connexion</li>
            <li>Page d'accueil statistic</li>
            <li>Page page de gestion des utilisateurs</li>
            <li>Page page de gestion des annonces</li>
            <li>Page page de gestion des reservations</li>
            <li>Page page de gestion des commentaires</li>
            <li>Page page de gestion des utilisateurs</li>
          </ul>
        </div>
        <div className="col-md-6">
          <YoutubePlayer
            title="Infinity Booking Adminstration"
            url="https://www.youtube-nocookie.com/embed/16lLBi4wBqA"
          />
        </div>
      </div>
      <Spacer spacerNumber="4" />
    </>
  );
}

export default Project4;
