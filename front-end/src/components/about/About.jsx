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
              la librairie React et le langage SQL. Je suis doté d’une grande
              autonomie et du sens du code organisé.
            </h3>
            <h3 className="my-5 text-primary">Profil</h3>
            <div className="profil">
              <p>
                <img src="img/photo.jpg" alt="profil" />
                Je suis développeur web fullstack sur les langages Javascript et
                PHP. Je suis ouvert aux propositions de mission en frontend,
                backend ou fullstack.
              </p>
              <p>
                Passionné de développement web, je suis développeur depuis deux
                ans. J'ai acquis de solides bases en PHP, JavaScript et SQL. Je
                me suis orienté vers la maîtrise du framework Symfony, la
                librairie React et très récemment Nest avec node.js.
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
                équivalent Licence/Master je suis formé aux technologies
                frontend et backend en Javascript et PHP. Je suis aussi capable
                de concevoir, développer et déployer un projet web. Coté
                frontend, je suis opérationnel pour intervenir en intégration
                avec du HTML, CSS, SCSS, javascript, bootstrap et React. Coté
                backend, je peux travailler des projets en Api REST
                ou en MVC avec Symfony ⅘ et sur des bases de données en SQL.
              </p>
              <p>
                En suivant ce lien{" "}
                <NavLink to="/downloads">Téléchargements</NavLink>, vous
                trouverez un CV au format pdf et d'autres documents pour
                illustrer mon parcours de développeur.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
