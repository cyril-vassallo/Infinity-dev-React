import React, { Component } from "react";
import Link from 'next/link'

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = null;
    this.prevScrollPos = null;
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
    this.prevScrollPos = window.pageYOffset;
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
          <Link href="/">
            <a>Infinity Dev</a>
          </Link>
          <Link href="/downloads">
            <a>Téléchargement</a>
          </Link>
          <Link href="/demo">
            <a>Démo 3D</a>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navigation;
