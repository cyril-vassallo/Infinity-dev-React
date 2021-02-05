import React from "react";
import Spacer from "../../partials/spacer/Spacer";
import Presentation from "../../presentation/Presentation";

function Project7({images}) {
  return (
    <>
      <div className="row my-5">
        <div className="col">
          <h4>EyeMatch - Symfony 4 </h4> 
          <p className="text-primary">Septembre à Décembre 2020</p>
          <p>
          Il s'agissait de concevoir et développer la plateforme EyeManager. J'étais responsable de la partie administration de la plateforme.
          Celle-ci permettant l'organisation de la boutique de manière atomique, la gestion du stocks de lunettes, mais aussi permettant la recherche intelligente basé sur des critères spécifiques au métier des opticiens.
          </p>
        </div>
      </div>
      <div className="row my-5" id="details7" style={{ display: "none" }}>
        <div className="col-md-6">
          <h5 className="text-success">Environnement Technique</h5>
          <p>
            Symfony4, PHP, Apache2, Javascript, SQL, Jquery, Twig, l'ORM
            Doctrine, Bootstrap4, Html5/CSS, template css/js forest.
          </p>
          <h5 className="text-success">Les fonctionnalités</h5>
          <ul>
            <li>Page des utilisateurs</li>
            <li>Page de gestion des meubles</li>
            <li>Page de gestion des plateaux</li>
            <li>Page de gestion des emplacements</li>
            <li>Page de gestion des Lunettes</li>
            <li>Page de gestion des roles et permissions </li>
            <li>Page de recherche de lunettes</li>
            <li>Page de recherche des emplacements contenant des lunettes</li>
            <li>Page de connexion utilisateurs</li>
            <li>Page de gestion des jeux</li>   
            <li>...</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h5 className="text-success">Projet EyeManager</h5>
          <Presentation images={images} />
        </div>
      </div>
      <Spacer spacerNumber="7" />
    </>
  );
}


export default Project7;


