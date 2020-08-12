import React, { Component } from 'react';
import Weather from '../weather/Weather';
import Map from '../map/Map';
import Banner from '../partials/banner/Banner';
import Card from '../card/Card';

class Widgets extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
    render() {
        return (
          <div className="widgets" id="widgets">
            <Banner
              title="Démonstrations de solutions"
              background="background-4.jpg"
              position={4}
              handleMouseEnter={this.props.handleMouseEnter}
            />
            <Card />
            <Weather />
            <Map />
          </div>
        );
    }
}

export default Widgets;