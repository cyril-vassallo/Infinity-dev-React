import React, { Component } from "react";

class Technologies extends Component {
  state = {};
  render() {
    return (
      <div className="Techno container my-5">
        <div className="row my-5">
          <div className="col">
            <h3>LANGAGES </h3>
            <p>Javascript ES6, TypeScript, PHP7, HTML5, CSS3, SASS, SQL</p>
          </div>
          <div className="col-md-6"></div>
        </div>
        <div className="row my-5">
          <div className="col-md-6"></div>
          <div className="col">
            <h3>FRAMEWORKS</h3>
            <p>Nest, Symfony 4/5, React, Vue.js </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <h3>TECHNOLOGIES</h3>
            <p>
              Bootstrap 4, Webpack, PHPUnit, Api Platform, Doctrine, TypeORM,
              Twig3, ThreeJS
            </p>
          </div>
          <div className="col-md-6"></div>
        </div>
        <div className="row my-5">
          <div className="col-md-6"></div>
          <div className="col">
            <h3>ENVIRONNEMENT TECHNIQUE</h3>
            <p>
              Visual Studio Code, Postman, Swagger, MySql, PostgreSQL, Apache2,
              node.js, SSH, Bash, git, Heroku, Photoshop, Krita, Windows, Linux,
              MacOS
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <h3>COMPÉTENCES</h3>
            <p>
              Développement d'une api RESTful avec Nest ou Symfony (api
              platform).
            </p>

            <p>
              Développement d'une interface web frontend responsive avec React.
            </p>

            <p>
              Développement de la partie backend d’une interface utilisateur
              web.
            </p>

            <p>
              Conception et mise en place d’une base données MySQL ou
              PostgreSQL.
            </p>

            <p>Développement des composants d’accès aux données SQL ou ORM.</p>

            <p>
              Construction d’une application en orientée objet n-tiers, MVC et
              REST
            </p>

            <p>Maquettage d'une application, UML (Use Case, MPD, MCD).</p>

            <p>Déploiement et mise en production.</p>

            <p>Collaboration en méthode agile.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Technologies;
