import React, { Component } from "react";
import Skills from "./../../components/skills/Skills";
import Career from "./../../components/career/Career";
import Contact from "./../../components/contact/Contact";
import About from "../../components/about/About";
import Widgets from "../../components/widgets/Widgets";
import Productions from "./../../components/Productions/Productions";
import Header from "../../components/partials/header/Header";
import AbsolutNav from "./../../components/partials/absolutNav/AbsolutNav";
import Footer from "./../../components/partials/footer/Footer";

class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      subNavPosition: 0,
    };
  }

  handleMouseEnter = position => {
    const copyState = { ...this.state };
    copyState.subNavPosition = position;
    this.setState(copyState);
  };

  render() {
    return (
      <main className="portfolio">
        <AbsolutNav position={this.state.subNavPosition} />
        <Header handleMouseEnter={this.handleMouseEnter} />
        <About handleMouseEnter={this.handleMouseEnter} />
        <Career handleMouseEnter={this.handleMouseEnter} />
        <Skills handleMouseEnter={this.handleMouseEnter} />
        <Productions handleMouseEnter={this.handleMouseEnter} />
        <Widgets handleMouseEnter={this.handleMouseEnter} />
        <Contact handleMouseEnter={this.handleMouseEnter} />
        <Footer />
      </main>
    );
  }
}

export default Portfolio;
