import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = null;
    this.prevScrollPos = window.pageYOffset;
  }

  handleScrollFunction = () => {
    let currentScrollPos = window.pageYOffset;
    if (this.prevScrollPos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }

    this.prevScrollPos = currentScrollPos;
  };

  componentDidMount = () => {
    this.handleScroll = window.addEventListener(
      "scroll",
      this.handleScrollFunction
    );
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScrollFunction, {
      passive: true,
    });
  };

  render() {
    return (
      <nav className="container" id="navbar">
        <div className="row">
          <NavLink to="/">Infinity Dev</NavLink>
          <NavLink to="/downloads">Téléchargement</NavLink>
          <NavLink to="/demo">Démo 3D</NavLink>
        </div>
      </nav>
    );
  }
}

export default Navigation;
