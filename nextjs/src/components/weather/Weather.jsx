import React, { Component } from "react";
import FetchWeather from "../../services/FetchWeather";
import Widget from "./widget/Widget";
import Loader from "../loader/Loader";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: null,
      fetchWeather : new FetchWeather("Paris"),
      isLoading : false
    };
  }

  /**
   * Launch fetchWeather onChange
   */
  handleChangeCity = ({target}) => {
    const city = target.value
    //console.log("Dans handleChangeCity : ", city);
    const copyState = { ...this.state };
    copyState.fetchWeather = new FetchWeather(city);
    copyState.fetchWeather.getCurrentWeather(
      this.successGetCurrentWeather,
      this.failedGetCurrentWeather
      );
    this.setState(copyState);
    this.setLoading();
    
  }

  setLoading = () => {
    const copyState = { ...this.state };
    copyState.isLoading = true;
    this.setState(copyState);
  }

  /**
   * Called if fetch success
   * @param {object} currentWeather
   */
  successGetCurrentWeather = (currentWeather) => {
    const copyState = { ...this.state };
   // console.log("Dans successGetCurrentWeather : ", currentWeather);
    copyState.currentWeather = currentWeather;
    copyState.isLoading = false;
    this.setState(copyState);
  };

  /**
   * Called if fetch failed
   * @param {object} currentWeather
   */
  failedGetCurrentWeather = (error) => {
    console.log("Dans failedGetCurrentWeather", error);
  };

  render() {
    return (
        <div className="container weather ">
          <div className="row mt-5">
            <div className="col-md mb-5">
              <h3 className="text-primary">Widget Météo</h3>
              <p className="text-secondary">
                Choisissez une ville pour obtenir la météo des 3 prochaines
                heures.
              </p>
              <select
                id="city"
                className="form-control"
                onChange={this.handleChangeCity}
              >
                <option value="Paris">--Choisissez une ville--</option>
                <option value="Montpellier">Montpellier</option>
                <option value="Paris">Paris</option>
                <option value="Marseilles">Marseilles</option>
                <option value="Bordeaux">Bordeaux</option>
                <option value="Tours">Tours</option>
                <option value="Toulouse">Toulouse</option>
                <option value="Lyon">Lyon</option>
              </select>
              {this.state.isLoading && <Loader />}
            </div>
            {this.state.currentWeather && !this.state.isLoading && (
              <div className="col">
                <Widget
                  main={this.state.currentWeather.main}
                  weather={this.state.currentWeather.weather[0]}
                  city={this.state.currentWeather.name}
                  wind={this.state.currentWeather.wind}
                />
              </div>
            )}
          </div>
        </div>
    );
  }
}

export default Weather;
