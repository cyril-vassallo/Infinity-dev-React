import React, { Component } from "react";
import './projects.css'
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";


class Projects extends Component {
  constructor(props){
    super(props);
    this.images = props.images;
  }

  render() {
    return (
      <div className="container project my-5">
        <h3 className="text-center my-5 text-primary">Les projets</h3>
        <Project1 images={this.images.rps}/>
        <Project2 images={this.images.emity}/>
        <Project3/>
        <Project6/>
        <Project4/>
        <Project5/>
      </div>
    );
  }
}

export default Projects;
