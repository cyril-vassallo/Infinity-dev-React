import Conf from "../config/config-dev";


/**
 * Request json data from public
 */
class FetchData {
  getData = (fetchSuccess) => {
    let query = `${Conf.app.DOMAINE}data/productions.json`;

    return fetch(query)
      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("Problème de réponse ", response);
      })
      .then((data) => {
        //console.log("Data: ", data);
        fetchSuccess(data);
      });
  };
}
export default FetchData;
