import React, { Component } from 'react';
import Weather from '../weather/Weather';
import Map from '../map/Map';
import Banner from '../partials/banner/Banner';

class Widgets extends Component {
    render() {
        return (
          <div className="widgets">
            <Banner title="Widgets" background="background-4.jpg" />
            <Weather/>
            <Map/>
          </div>
        );
    }
}

export default Widgets;