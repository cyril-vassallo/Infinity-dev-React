import React, { Component } from "react";
import Banner from "../partials/banner/Banner";
import Card3d from "./card/Card3d";
import "./contact.css";
import Mailto from "./mailto/Mailto";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid contact">
        <Banner title="Contact" background="background-7.jpg" />
        <Mailto />
        <Card3d />
      </div>
    );
  }
}

export default Contact;
