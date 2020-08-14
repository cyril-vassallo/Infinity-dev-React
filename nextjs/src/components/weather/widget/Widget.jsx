import React from 'react';
import {ucFirst} from '../../../services/utils'
import slugify from 'slugify'



function Widget ({city,main,weather,wind}) {
    return (
      <div className="widget">
        <img
          src={`img/weather/background-${slugify(city.toLowerCase())}.jpg`}
          alt={city}
        />
        <div className="container-fluid p-5">
          <div className="row text-center">
            <div className="col">
              <p className="city text-center">{city}</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <img src={`img/weather/${weather.icon}.png`} alt=""/>
              <p className="state">{ucFirst(weather.description)}</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6">
              <p>Moyenne: {main.temp} °C</p>
              <p>Max: {main.temp_max} °C</p>
              <p>Min: {main.temp_min} °C</p>
            </div>
            <div className="col">
              <p>Humidité: {main.humidity} %</p>
              <p>Pression AT: {main.pressure} hPa</p>
              <p>Vent: {parseInt(wind.speed)*3.6} km/h</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Widget ;