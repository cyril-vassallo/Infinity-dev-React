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
    "map-quest": {
      APPID: "6fd7XLunUyAuwQbnhF6f07cZYFxrXESu",
      END_POINT: "http://www.mapquestapi.com/",
      URI_ROUTE: "directions/v2/route?",
      URI_SHAPE: "directions/v2/routeshape?",
    },
    "map-box": {
      APPID:
        "pk.eyJ1IjoiemhhbmdzYWlsaSIsImEiOiJja2N4M3FveGgwMjdpMzBvcDk4NGc2YnczIn0.esbliyGq5IcfjhF9jiG8-Q",
    },
  },
};
export default Config;


