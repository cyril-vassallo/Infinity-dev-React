import React, { Component } from "react";
import "./about.css";
import { NavLink } from "react-router-dom";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about container" id="about">
        <div className="row my-5">
          <div className="col mb-5">
            <h3 className="my-5 introduction">
              Développeur web fullstack, je m’appuie sur les frameworks Symfony,
              la librairie React et le langage SQL. Je suis doté d’une
              grande autonomie et du sens du code organisé.
            </h3>
              <h3 className="my-5 text-primary">Profil</h3>
            <div className="profil">
              <p>
                <img src="img/photo.jpg" alt="profil"/>Je suis développeur fullstack sur les langages
                Javascript et PHP. Je suis ouvert aux propositions de mission en
                frontend, backend ou fullstack.
              </p>
              <p>
                Je suis passionné en développement web. J'ai acquis une solide
                base de douze mois de pratique de PHP, JavaScript et SQL durant ma
                formation intensive de Concepteur et Développeur d'Application. Je
                me suis orienté vers la maîtrise du framework Symfony, la
                librairie React et très récemment Nest avec node.js. Je suis
                également ouvert aux autres frameworks PHP et Javascript
                avec ou sans ORM.
              </p>
              <p>
                Détenteur d'un titre professionnel de{" "}
                <a
                  target="_blanc"
                  href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000036805869&categorieLien=id"
                >
                  <span
                    className="text-primary"
                    title="Voir le détail du titre sur Légifrance !!"
                  >
                    niveau II
                  </span>
                </a>{" "}
                équivalent Licence/Master, je développe depuis deux ans. Je suis
                formé aux technologies frontend et backend en Javascript et PHP.
                Je suis aussi capable de concevoir, développer et deployer un
                projet. Je peux intervenir sur du frontend en React Html/CSS/SCSS,
                sur du backend sur Symfony 4/5 ou Nest et sur des bases de données
                en SQL.
              </p>
              <p>
                J'ai mis à disposition en rubrique{" "}
                <NavLink to="/downloads">Téléchargement</NavLink> un cv au format
                pdf et d'autres documents pour illustrer mon parcours de
                développeur.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
