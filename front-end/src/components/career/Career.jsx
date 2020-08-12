import React, { Component } from 'react';
import "./career.css";
import Banner from '../partials/banner/Banner';
import Timeline from './timeline/Timeline';



class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <div className="career" id="career" onMouseEnter={this.setPosition}>
        <Banner
          title="Expériences Professionnelles"
          background="background-3.jpg"
          position={1}
          handleMouseEnter={this.props.handleMouseEnter}
        />
        <Timeline />
      </div>
    );
  }
}

export default Career;