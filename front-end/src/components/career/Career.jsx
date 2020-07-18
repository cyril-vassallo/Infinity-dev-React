import React, { Component } from 'react';
import "./career.css";
import Banner from '../partials/banner/Banner';
import Timeline from './timeline/Timeline';



class Career extends Component {
    state = {  }
    render() {
        return (
          <div className="career">
            <Banner
              title="Expériences Professionnelles"
              background="background-3.jpg"
            />
            <Timeline/>
          </div>
        );

    }
}

export default Career;