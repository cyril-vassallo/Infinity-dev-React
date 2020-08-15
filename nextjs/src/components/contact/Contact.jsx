import React, { Component } from "react";
import Banner from "../banner/Banner";
import Mailto from "./mailto/Mailto";

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {};
  }
  render() {
    return (
      <div className="contact" id="contact">
        <Banner
          title="Contact"
          background="background-7.jpg"
          position={5}
          handleMouseEnter={this.props.handleMouseEnter}
        />
        <Mailto />
      </div>
    );
  }
}

export default Contact;
