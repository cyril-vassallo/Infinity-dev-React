import React, { Component } from "react";
import Link from 'next/link'

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
          <Link href="/">Infinity Dev</Link>
          <Link href="/downloads">Téléchargement</Link>
          <Link href="/demo">Démo 3D</Link>
        </div>
      </nav>
    );
  }
}

export default Navigation;
