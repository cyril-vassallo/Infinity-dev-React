import React from 'react';
import Spacer from "../../spacer/Spacer";
import Presentation from "../../presentation/Presentation";

function Project1({images}) {

    return (
      <>
        <div className="row my-5">
          <div className="col">
            <h4>Risques psychosociaux au travail (RPS) - Formation continue</h4>
            <p className="text-primary">Avril à Juillet 2019</p>
            <p>
              Il s'agissait de répondre à la demande de CSHCT de l'Afpa. Il
              était question de mettre à disposition sur serveur mutualisé un
              gestionnaire de questionnaires en ligne permettant d'interroger de
              façon anonyme les collaborateurs de l'Afpa sur le territoire
              national au sujet des risques psychosociaux au travail.
            </p>
          </div>
        </div>
        <div className="row my-5" id="details1" style={{ display: "none" }}>
          <div className="col-md-6">
            <h5 className="text-success">Environnement Technique</h5>
            <p>
              PHP, Apache2, Javascript, SQL, Jquery, Bootstrap 4, Html5/CSS3,
              Framework PHP n-tiers en POO.
            </p>
            <h5 className="text-success">Conception</h5>
            <p>
              J'ai réalisé l'intégralité de la conception du projet sous la
              supervision du formateur Jean-Jacques Pagan
            </p>
            <ul>
              <li>Cahier des charges</li>
              <li>Maquettage et analyse du besoin</li>
              <li>Maquettes finales</li>
              <li>Conception de la base de données</li>
            </ul>
            <h5 className="text-success">
              Les fonctionnalités que j'ai développé
            </h5>
            <ul>
              <li>Page de connexion des utilisateurs</li>
              <li>Page static d'accueil</li>
              <li>Page de gestion des utilisateurs de l'administration</li>
              <li>
                Page d'affichage du questionnaire coté client (responsive
                mobile)
              </li>
              <li>Page d'affichage des résultats d'enquêtes</li>
              <li>Page de génération et envoie de code unique</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="text-success">Projet RPS</h5>
            <Presentation images={images} />
          </div>
        </div>
        <Spacer spacerNumber="1" />
      </>
    );
    
}

export default Project1;