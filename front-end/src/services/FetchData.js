import Conf from "../config/config-dev";

/**
 * Request api's class
 */
class FetchData {
  /**
   * @param {string} cityName
   * @param {string} stateCode
   * @param {string} units
   */
  constructor(cityName = "paris", stateCode = "fr", units = "metric" , lang = "fr") {
    this.url = Conf.api.weather.END_POINT;
    this.uri = Conf.api.weather.URI;
    this.appId = Conf.api.weather.APPID;
    this.cityName = cityName;
    this.stateCode = stateCode;
    this.units = units;
    this.lang = lang;
  }

  /**
   * GET Current Weather for a given City
   * api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={your api key}
   * @param  {function} success callback
   * @param  {function} failed callback
   */
  getCurrentWeather = (success, failed) => {
    const query = `${this.url}${this.uri}q=${this.cityName},${this.stateCode}&appid=${this.appId}&units=${this.units}&lang=${this.lang}`;
    fetch(query)
      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("response Error:  ", response);
      })
      .then((data) => {
        success(data);
      })
      .catch((error) => {
        failed(error);
      });
  };

}
export default FetchData;
