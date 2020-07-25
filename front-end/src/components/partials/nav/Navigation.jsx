import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = window.addEventListener("scroll", this.scrollFunction);
    this.prevScrollPos = window.pageYOffset;
  }

  scrollFunction = () => {
    let currentScrollPos = window.pageYOffset;
    if (this.prevScrollPos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }

    this.prevScrollPos = currentScrollPos;
  };

  render() {
    return (
      <div className="container-fluid" id="navbar">
        <div className="row">
          <NavLink to="/">Infinity Dev</NavLink>
          {/* <NavLink to="/downloads">Téléchargement</NavLink> */}
        </div>
      </div>
    );
  }
}

export default Navigation;
