import React, { Component } from "react";
import Banner from "../partials/banner/Banner";
import "./contact.css";
import Mailto from "./mailto/Mailto";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact" id="contact">
        <Banner title="Contact" background="background-7.jpg" />
        <Mailto />
      </div>
    );
  }
}

export default Contact;
