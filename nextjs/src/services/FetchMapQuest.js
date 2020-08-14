import Conf from "../config/config-dev";

/**
 * Request MAPQUEST route
 */
class FetchMapQuest {
  constructor() {
    this.key = Conf.api["map-quest"].APPID;
    this.from = "2153+route+de+Mende%2C+34090+Montpellier%2C+france";
  }

  /**
   * Fetch to get route sessionID
   * @param {string} road
   * @param {string} zipCode
   * @param {string} city
   */
  getRoute = (road, zipCode, city) => {
    let to = `${road}%2C+${zipCode}%20+${city}%2C+france`;
    let query = `${Conf.api["map-quest"].END_POINT}${Conf.api["map-quest"].URI_ROUTE}key=${this.key}&from=${this.from}&to=${to}&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`;

    return fetch(query)
      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("Problème de réponse ", response);
      })
      .then((data) => {
        //console.log("Data: ", data);
        return data;
      });
  };

  /**
   * Fetch to get route shape
   * @param {string} sessionId
   * @param {function} fetchMapQuestSuccess
   */
  getShape = (sessionId, fetchMapQuestSuccess) => {
    const query = `${Conf.api["map-quest"].END_POINT}${Conf.api["map-quest"].URI_SHAPE}key=${this.key}&sessionId=${sessionId}&fullShape=true`;
    return fetch(query)
      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("Problème de réponse ", response);
      })
      .then((data) => {
        //console.log("Data: ", data);
        fetchMapQuestSuccess(data.route.shape.shapePoints);
      });
  };
}
export default FetchMapQuest;
