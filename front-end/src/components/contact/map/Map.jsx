import React, { Component } from "react";
import './map.css';
import FetchAutocomplete from "../../../services/FetchAutocomplete";

class Map extends Component {
  constructor(props) {
    super(props);
    this.select = "";
    this.autocomplete = new FetchAutocomplete();
  }

  componentDidMount = () => {
    this.select = document.getElementById("selection");
    document
      .getElementById("adresse")
      .addEventListener("input", this.autocompleteAdresse, false);
  };

  
  autocompleteAdresse = async() => {
   let inputValue   = document.getElementById("adresse").value;
   
    if (inputValue) {
      try{
        await this.autocomplete.getAutoCompletion(inputValue, this.displaySelection);
      }catch(error){
        this.select.style.display = "block";
        this.select.innerHTML = "Erreur la requête n'a pas pu aboutir :"+ error;
      }
    } else {
      this.select.style.display = "none";
    }
  };


  displaySelection = response => {
    if (Object.keys(response.features).length > 0) {
      this.select.style.display = "block";
      if (this.select.childElementCount !== 0) {
        this.select.removeChild(this.select.firstChild);
      }
      let ul = document.createElement("ul");
      this.select.appendChild(ul);

      response.features.forEach(function (element) {
        console.log(element);
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
            <input className="form-control"type="text" id="resAdresse" disabled />
            <label htmlFor="CP">Code Postal :</label>
            <input className="form-control"type="text" id="CP" disabled />
            <label htmlFor="Ville">Ville :</label>
            <input className="form-control"type="text" id="Ville" disabled />
            <div className="sep"></div>
            <button className="btn btn-success my-5" type="button">
              Calculer !
            </button>
          </div>
          <div className="col map"></div>
        </div>
      </div>
    );
  }
}

export default Map;
