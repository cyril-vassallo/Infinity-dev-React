import React, { Component } from "react";
import Skills from "../src/components/skills/Skills";
import Career from "../src/components/career/Career";
import Contact from "../src/components/contact/Contact";
import About from "../src/components/about/About";
import Widgets from "../src/components/widgets/Widgets";
import Productions from "../src/components/Productions/Productions";
import Header from "../src/components/header/Header";
import AbsolutNav from "../src/components/absolutNav/AbsolutNav";
import Footer from "../src/components/footer/Footer";
import AOS from "aos";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      subNavPosition: 0,
    };
  }

  componentDidMount = () => {
    AOS.init();
  }
  
  handleMouseEnter = (position) => {
    const copyState = { ...this.state };
    copyState.subNavPosition = position;
    this.setState(copyState);
  };

  render() {
    return (
      <main className="Index">
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

export default Index;
