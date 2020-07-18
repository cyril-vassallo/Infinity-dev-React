import React, { Component } from "react";
import './projects.css'
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";


class Projects extends Component {
  state = {
    rps: {
      images: [
        {
          title: "",
          path: "/img/products/rps/rps.jpg",
          description: "",
        },
        {
          title: "Gestion des utilisateurs",
          path: "/img/products/rps/rps-administrateurs.jpg",
          description: "",
        },
        {
          title: "",
          path: "/img/products/rps/rps-connexion.jpg",
          description: "",
        },
        {
          title: "",
          path: "/img/products/rps/rps-code.jpg",
          description: "",
        },
      ],
    },
    emity: {
      images: [
        {
          title: "",
          path: "/img/products/emity/admin-emity.png",
          description: "",
        },
        {
          title: "Flux RSS",
          path: "/img/products/emity/rss.png",
          description: "",
        },
        {
          title: "",
          path: "/img/products/emity/weather.png",
          description: "",
        },
        {
          title: "Api Info-transport",
          path: "/img/products/emity/info-transport.png",
          description: "",
        },
        {
          title: "",
          path: "/img/products/emity/templates.png",
          description: "",
        },
      ],
    },
  };

  render() {
    return (
      <div className="container project my-5">
        <h3 className="text-center my-5 text-primary">Les projets</h3>
        <Project1 images={this.state.rps.images}/>
        <Project2 images={this.state.emity.images}/>
        <Project3/>
        <Project6/>
        <Project4/>
        <Project5/>
      </div>
    );
  }
}

export default Projects;
