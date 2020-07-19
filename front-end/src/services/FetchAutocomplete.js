import Conf from "../config/config-dev";


/**
 * Request auto complete api .gouv
 */
class FetchAutoComplete {


  getAutoCompletion = (inputValue, displaySelection) => {
    let query = `${Conf.api["auto-complet"].END_POINT}${Conf.api["auto-complet"].URI}q=${inputValue}?type=housenumber&amp;autocomplete=1`;

    return fetch(query)
      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("Problème de réponse ", response);
      })
      .then((data) => {
        console.log("Data: ", data);
        displaySelection(data);
      });
  };
}
export default FetchAutoComplete;
