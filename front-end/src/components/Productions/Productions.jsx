import React, { Component } from 'react';
import Presentation from "../presentation/Presentation"
import Banner from '../partials/banner/Banner'
import Projects from './projects/Projects';
import './productions.css';

class Productions extends Component {
  state = {
    images: [
      {
        title: "E-Learning - Mini CRM",
        path: "/img/products/auto-formations/crm.png",
        description: "",
      },
      {
        title: "E-Learning - Réservations",
        path: "/img/products/auto-formations/infinity-booking.png",
        description: "",
      },
      {
        title: "E-Learning - Réservations Administration",
        path: "/img/products/auto-formations/infinity-booking-admin.png",
        description: "",
      },
      {
        title: "Emity - Administration EManager",
        path: "/img/products/emity/admin-emity.png",
        description: "",
      },
      {
        title: "Emity - Widget Météo",
        path: "/img/products/emity/meteo.png",
        description: "",
      },
      {
        title: "Emity - Widget Flux RSS",
        path: "/img/products/emity/rss.png",
        description: "",
      },
      {
        title: "Emity - Choix des templates publicitaire",
        path: "/img/products/emity/templates.png",
        description: "",
      },
      {
        title: "AFPA - Gestionnaire de questionnaires",
        path: "/img/products/rps/rps.jpg",
        description: "",
      },
    ],
  };
  render() {
    return (
      <div className="products">
        <Banner
          title="Portfolio des productions"
          background="background-9.jpg"
        />
        <h3 className="text-center my-5 text-primary">Synopsis des productions</h3>
        <div className="container presentation">
          <div className="row my-5 ">
            <div className="col">
              <Presentation images={this.state.images} />
            </div>
          </div>
        </div>
        <Projects />
      </div>
    );
  }
}

export default Productions;