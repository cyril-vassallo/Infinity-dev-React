import React, { Component } from "react";
import "./skills.css";
import Banner from "../partials/banner/Banner";
import Technologies from './technologies/Technologies'

class Skills extends Component {
  render() {
    return (
      <div className="skills" id="skills">
        <div className="row">
            <Banner
                title="Développement"
                background="background-2.jpg"
            />
          <div className="col">
              <Technologies/>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
