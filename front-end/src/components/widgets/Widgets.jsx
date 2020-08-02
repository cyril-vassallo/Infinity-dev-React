import React, { Component } from 'react';
import Weather from '../weather/Weather';
import Map from '../map/Map';
import Banner from '../partials/banner/Banner';
import Card3d from '../three/Card3d';

class Widgets extends Component {
    render() {
        return (
          <div className="widgets" id="widgets">
            <Banner title="Démonstrations de solutions" background="background-4.jpg" />
            <Weather/>
            <Map/>
            <Card3d/>
          </div>
        );
    }
}

export default Widgets;