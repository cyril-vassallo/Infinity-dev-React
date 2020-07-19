/**
 *APP CONFIG - CRÉER UN FICHIER DIFFÉRENT POUR LA PROD
 */
const Config = {
  app: {
    DOMAINE: "http://localhost:3000/",
  },

  api: {
    weather: {
      APPID: "bb0f3dd76b3794f46812b6514aa78828",
      END_POINT: "https://api.openweathermap.org/",
      URI: "data/2.5/weather?",
    },
    "auto-complet": {
      END_POINT: "https://api-adresse.data.gouv.fr/",
      URI: "search/?",
    },
  },
};
export default Config;


