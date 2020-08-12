import React, { Component } from "react";
import "./skills.css";
import Banner from "../partials/banner/Banner";
import Technologies from './technologies/Technologies'

class Skills extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className="skills container-fluid" id="skills">
        <div className="row">
          <Banner
            title="Développement"
            background="background-2.jpg"
            position = {2}
            handleMouseEnter={this.props.handleMouseEnter}
          />
          <div className="col">
            <Technologies />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
