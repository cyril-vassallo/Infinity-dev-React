import React, { Component } from "react";
import "./map.css";
import "leaflet/dist/leaflet.css";
import FetchAutocomplete from "../../../services/FetchAutocomplete";
import Leaflet from "leaflet";
import FetchMapQuest from "../../../services/FetchMapQuest";

class Map extends Component {
  constructor(props) {
    super(props);
    this.select = null;
    this.autocomplete = new FetchAutocomplete();
    this.mapQuest = new FetchMapQuest();
    this.map = null;
  }

  componentDidMount = () => {
    this.select = document.getElementById("selection");
    document
      .getElementById("adresse")
      .addEventListener("input", this.autocompleteAdresse, false);
    // this.map = Leaflet.map("map").setView([51.505, -0.09], 13);
    // Leaflet.tileLayer(
    //   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    //   {
    //     attribution:
    //       'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     id: "mapbox/streets-v11",
    //     tileSize: 512,
    //     zoomOffset: -1,
    //     accessToken: "your.mapbox.access.token",
    //   }
    // ).addTo(this. map);
  };

  autocompleteAdresse = async () => {
    let inputValue = document.getElementById("adresse").value;

    if (inputValue) {
      try {
        await this.autocomplete.getAutoCompletion(
          inputValue,
          this.displaySelection
        );
      } catch (error) {
        this.select.style.display = "block";
        this.select.innerHTML =
          "Erreur la requête n'a pas pu aboutir :" + error;
      }
    } else {
      this.select.style.display = "none";
    }
  };

  displaySelection = (response) => {
    if (Object.keys(response.features).length > 0) {
      this.select.style.display = "block";
      if (this.select.childElementCount !== 0) {
        this.select.removeChild(this.select.firstChild);
      }
      let ul = document.createElement("ul");
      this.select.appendChild(ul);

      response.features.forEach(function (element) {
        let li = document.createElement("li");
        let ligneAdresse = document.createElement("span");
        let infosAdresse = document.createTextNode(
          element.properties.postcode + " " + element.properties.city
        );

        ligneAdresse.innerHTML = element.properties.name;
        li.addEventListener("click", () => {
          document.getElementById("adresse").value =
            element.properties.name +
            "\r\n" +
            element.properties.postcode +
            " " +
            element.properties.city;
          document.getElementById("selection").style.display = "none";

          document.getElementById("resAdresse").value = element.properties.name;
          document.getElementById("CP").value = element.properties.postcode;
          document.getElementById("Ville").value = element.properties.city;
        });
        li.appendChild(ligneAdresse);
        li.appendChild(infosAdresse);
        ul.appendChild(li);
      });
    } else {
      this.select.style.display = "none";
    }
  };

  handleClickRoute = async () => {
    let road = document.getElementById("resAdresse").value;
    let zipCode = document.getElementById("CP").value;
    let city = document.getElementById("Ville").value;
    try {
      await this.mapQuest.getRoute(road, zipCode, city);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="container panel">
        <div className="row my-5 test ">
          <div className="col">
            <h3 className="text-primary text-center">Widget Itinéra ire</h3>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12">
            <p>Calculer l'itinéraire de chez moi à votre entreprise</p>
            <input
              className="form-control"
              type="text"
              placeholder="Votre ville"
              id="adresse"
            />
            <div
              id="selection"
              className="dropdown"
              style={{ display: "none" }}
            ></div>
            <div className="sep"></div>
            <label htmlFor="resAdresse">Adresse :</label>
            <input
              className="form-control"
              type="text"
              id="resAdresse"
              disabled
            />
            <label htmlFor="CP">Code Postal :</label>
            <input className="form-control" type="text" id="CP" disabled />
            <label htmlFor="Ville">Ville :</label>
            <input className="form-control" type="text" id="Ville" disabled />
            <div className="sep"></div>
            <button
              onClick={this.handleClickRoute}
              className="btn btn-success my-5"
              type="button"
            >
              Calculer !
            </button>
          </div>
          <div className="col" id="map"></div>
        </div>
      </div>
    );
  }
}

export default Map;
