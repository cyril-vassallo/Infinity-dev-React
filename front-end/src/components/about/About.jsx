import React, { Component } from "react";
import "./about.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about container mt-5" id="about">
        <div className="row my-5">
          <div className="col mb-5">
            <h3 className="my-5 introduction">
              Développeur web fullstack, je m’appuie sur les frameworks Symfony,
              Nest.js, la librairie React et le langage SQL. Je suis doté d’une
              grande autonomie et du sens du code organisé.
            </h3>
            <h3 className="mt-5 text-primary">Profil</h3>
            <p>
              J'ai pour vocation d'être développeur fullstack sur les langages
              comme Javascript et PHP. Je suis ouvert aux propositions en frontend, backend ou fullstack. 
            </p>
            <h3 className="mt-5 text-primary">Préférences</h3>
            <p>
              Je suis passionné en développement web. J'ai acquis une solide
              base de douze mois de pratique de PHP, JavaScript et SQL durant ma
              formation de{" "}
              <span
                className="text-primary"
                title="Voir le Diplôme sur Légifrance !!"
              >
                niveau II
              </span>{" "}
              équivalente Licence/Master. Je me suis orienté naturellement vers
              la maîtrise du framework Symfony, la librairie React et très récemment Nest avec node.js. Je
              suis également ouvert aux autres frameworks PHP et Javascript du
              marché avec ou sans ORM.
            </p>
            <h3 className="mt-5 text-primary">Niveau</h3>
            <p>
              Je développe depuis deux ans. Ainsi, je suis très autonome
              et j'espère pouvoir rejoindre une équipe de développeur. 
              Je suis formé aux technologies frontend et backend
              en Javascript et PHP. Je suis aussi capable de concevoir, développer et deployer un projet de a à z.
              Je peux intervenir sur du frontend en React et sur du
              backend sur Symfony 4/5 ou Nest.
            </p>
            {/* <h3 className="mt-5 text-primary">Détail des compétences</h3>
            <p>
              J'ai mis à disposition à cette adresse, rubrique{" "}
              <a href="/downloads">Téléchargement</a>, un dossier personnel de
              compétences techniques au format pdf qui permettra à vos clients
              ou collaborateurs(trices) expérimenté(e)s dans le développement de
              se faire une idée de mon expérience dans le domaine. Un CV y est
              également téléchargeable.
            </p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
