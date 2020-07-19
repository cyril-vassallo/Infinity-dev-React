import Conf from "../config/config-dev";


/**
 * Request MAPQUEST route
 */
class FetchMapQuest {
  constructor() {
    this.key = Conf.api["map-quest"].APPID;
    this.from = "2153+route+de+Mende%2C+34090+Montpellier%2C+france";
  }

  getRoute = (road, zipCode, city) => {
    let to = `${road}%2C+${zipCode}+${city}%2C+france`;
    let query = `${Conf.api["map-quest"].END_POINT}${Conf.api["map-quest"].URI}key=${this.key}&from=${this.from}&to=${to}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`;

    return fetch(query)
      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("Problème de réponse ", response);
      })
      .then((data) => {
        console.log("Data: ", data);
      });
  };
}
export default FetchMapQuest;


//https://www.mapquestapi.com/directions/v2/route?key=KEY&from=2153+route+de+Mende%2C+34090+Montpellier%2C+france&to=11+rue+de+sauve%2CNimes%2C+france&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false

//http://www.mapquestapi.com/directions/v2/route?key=undefined&from=2153+route+de+Mende%2C+34090+Montpellier%2C+france&to=5%20Rue%20Voltaire%2C+31500+Toulouse%2C+france&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false