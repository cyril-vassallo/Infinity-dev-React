import React, { Component } from "react";
import "leaflet/dist/leaflet.css";
import "./map.css";
import FetchAutocomplete from "../../services/FetchAutocomplete";
import Leaflet from "leaflet";
import FetchMapQuest from "../../services/FetchMapQuest";
import Conf from "../../config/config-dev";

class Map extends Component {
  constructor(props) {
    super(props);
    this.select = null;
    this.autocomplete = new FetchAutocomplete();
    this.mapQuest = new FetchMapQuest();
    this.map = null;
    this.longitude = 43.64;
    this.latitude = 3.8635;
    this.zipCode = null;
    this.road = null;
    this.city = null;
    this.polylinePath = [];
    this.state = {
      route: null,
    };
  }

  componentDidMount = () => {
    this.select = document.getElementById("selection");
    document
      .getElementById("adresse")
      .addEventListener("input", this.autocompleteAdresse, false);
    this.displayMap();
    this.displayMarker("Point de départ: Résidence de Cyril");
  };

  displayMap = () => {
    const token = Conf.api["map-box"].APPID;
    this.map = Leaflet.map("map").setView([this.longitude, this.latitude], 13);
    Leaflet.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`,
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
        minZoom: 5,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: token,
      }
    ).addTo(this.map);
  };

  displayMarker = (
    popup = "Marker",
    color = "blue",
    longitude = this.longitude,
    latitude = this.latitude
  ) => {
    //delete original src from Leaflet icon in prototype
    delete Leaflet.Icon.Default.prototype._getIconUrl;
    //Load new icon in local leaflet bundle in module for different devices
    Leaflet.Icon.Default.mergeOptions({
      iconRetinaUrl: require(`leaflet/dist/images/marker-icon-2x-${color}.png`),
      iconUrl: require(`leaflet/dist/images/marker-icon-${color}.png`),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
    const marker = Leaflet.marker([longitude, latitude]).addTo(this.map);
    marker.bindPopup(popup).openPopup();
  };

  displayPolylinePath = () => {
    // create a Blue polyline from an array of LatLng points
    const polyline = Leaflet.polyline(this.polylinePath, {
      color: "blue",
    }).addTo(this.map);
    // zoom the map to the polyline
    this.map.fitBounds(polyline.getBounds());
  };

  fetchMapQuestSuccess = (shapePoints) => {
    const newPolylinePath = [];
    for (let i = 0; i < shapePoints.length; i += 2) {
      newPolylinePath.push([shapePoints[i], shapePoints[i + 1]]);
      if (i + 1 === shapePoints.length - 1) {
        let destination = this.road + " " + this.zipCode + " " + this.city;
        this.displayMarker(
          destination,
          "red",
          shapePoints[i],
          shapePoints[i + 1]
        );
      }
    }
    this.polylinePath = newPolylinePath;
    this.displayPolylinePath();
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
            " " +
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
    this.road = document.getElementById("resAdresse").value;
    this.zipCode = document.getElementById("CP").value;
    this.city = document.getElementById("Ville").value;
    try {
      const data = await this.mapQuest.getRoute(
        this.road,
        this.zipCode,
        this.city
      );
      this.displayNewRouteData(data);
      const sessionId = data.route.sessionId;
      console.log(sessionId);
      await this.mapQuest.getShape(sessionId, this.fetchMapQuestSuccess);
    } catch (error) {
      console.log(error);
    }
  };

  displayNewRouteData = ({ route }) => {
    console.log(route);
    const copyState = { ...this.state };
    copyState.route = route;
    this.setState(copyState);
  };

  render() {
    return (
      <div className="container panel">
        <div className="row my-5">
          <div className="col">
            <h3 className="text-primary">Widget Itinéraire</h3>
            <p className="my-5">
              Leaflet, MapQuest et l'API adresse.gouv une combinaison d'api et de
              composants gratuits pour tracer vos itinéraires.
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <p>
              Utilisez le champ d'autocomplétion pour tracer un itinéraire de
              chez moi à votre entreprise
            </p>
            <input
              className="form-control"
              type="text"
              placeholder="Votre adresse"
              id="adresse"
            />
            <div
              id="selection"
              className="dropdown"
              style={{ display: "none" }}
            ></div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4  m-1 text-center bg-light card">
            <p>Itinéraire pour :</p>
            <input
              className="form-control my-3"
              type="text"
              id="resAdresse"
              placeholder="adresse"
              disabled
            />
            <input
              className="form-control my-3"
              type="text"
              id="CP"
              placeholder="code postal"
              disabled
            />

            <input
              className="form-control my-3 "
              type="text"
              id="Ville"
              placeholder="ville"
              disabled
            />
            <button
              onClick={this.handleClickRoute}
              className="btn btn-lg btn-success my-5"
              type="button"
            >
              Afficher le tracer !
            </button>
            {this.state.route && (
              <p className="text-success my-3">
                Il me faudra parcourir{" "}
                <b>{Math.trunc(this.state.route.distance * 1.60934)} Km</b> en
                voiture pour me rendre à votre entreprise.
              </p>
            )}
          </div>
          <div className="col m-1 card" id="map"></div>
        </div>
      </div>
    );
  }
}

export default Map;
