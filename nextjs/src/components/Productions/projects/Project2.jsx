import React from "react";
import Spacer from "../../partials/spacer/Spacer";
import Presentation from "../../presentation/Presentation";

function Project2({images}) {
    return (
      <>
        <div className="row my-5">
          <div className="col">
            <h4>EManager portail d'administration et widgets - chez Emity</h4>
            <p className="text-primary">Septembre à décembre 2019</p>
            <p>
              Il s'agissait de répondre à la demande d'Emity. Il était question
              de réaliser la refonte de l'administration de la plateforme
              webEManager mais aussi de terminer les fonctionnalités de la
              plateforme web d'Emity dédié au broadcasting d’informations
              publicitaires sur écran dynamique.
            </p>
          </div>
        </div>
        <div className="row my-5" id="details2" style={{ display: "none" }}>
          <div className="col-md-6">
            <h5 className="text-success">Environnement Technique</h5>
            <p>
              PHP, Apache2, Javascript, SQL, Jquery, Twig3, Bootstrap
              4,Interact.JS, summernote, DataTables, Html5/CSS3, Framework PHP
              MVC en POO.
            </p>
            <h5 className="text-success">
              Les fonctionnalités que j'ai développé
            </h5>
            <p>
              J'ai réalisé la refonte de l'administration nécessaire pour les
              grands comptes comme Europcar, Prosima et Schindler
            </p>
            <ul>
              <li>Page de gestion des utilisateurs</li>
              <li>Page de gestion des Playlists</li>
              <li>Page de gestion des groupes de Lecteur d'écran</li>
              <li>Modifications mineurs sur la base de données</li>
            </ul>
            <h5 className="text-success">
              Autres fonctionnalités que j'ai développé ou terminé.
            </h5>
            <ul>
              <li>Page de choix des template d'affiche publicitaire</li>
              <li>Widget Météo</li>
              <li>Widget de flux RSS</li>
              <li>Une Api Info-transport</li>
              <li>Amélioration du module d'édition d'affiches</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="text-success">Productions chez Emity</h5>
            <Presentation images={images} />
          </div>
        </div>
        <Spacer spacerNumber="2" />
      </>
    );
    
}

export default Project2;