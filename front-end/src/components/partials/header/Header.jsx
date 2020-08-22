import React, { Component } from "react";
import "./header.css";
import PlayerAudio from "../../players/audio/PlayerAudio";
import Typewriter from "typewriter-effect";
import AOS from "aos";

class Header extends Component {
  constructor(props) {
    super(props);
    this.maxBackgrounds = 11;
    this.state = { 
      backgroundIndex: 0, 
      isVisible:true
    };
  }

  componentDidMount = () => {
    AOS.init({duration: 3000})
    const options = {
      root: null,
      rootMargin: window.innerHeight + "px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(this.intersectCallback, options);
    const header = document.querySelector(".header");
    observer.observe(header);
  };

  intersectCallback = () => {
    const copyState = { ...this.state };
    if(!this.state.isVisible){
      copyState.backgroundIndex =
      this.state.backgroundIndex !== this.maxBackgrounds
      ? copyState.backgroundIndex+1
      : 0;
    }
    copyState.isVisible = this.state.isVisible ? false: true
    this.setState(copyState);
  };

  handleClick = () => {
    const about = document.getElementById("about");
    about.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };


  setPosition = () => {
    this.props.handleMouseEnter(0)
  }

  render() {
    return (
      <header
        data-aos="fade-in"
        className="header"
        id="header"
        onMouseEnter={this.setPosition}
        style={{
          backgroundImage: `url("/img/banners/background-${this.state.backgroundIndex}.jpg")`,
        }}
      >
        <div className="row my-5">
          <div className="col">
            <h2>Cyril VASSALLO</h2>
            <h3 className="text-center text-primary">
              Développeur web <br />
              <Typewriter
                options={{
                  strings: [
                    "Javascript",
                    "PHP",
                    "React",
                    "Symfony",
                    "Node.js",
                    "Nest",
                    "fullstack",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>
        </div>
        <img src="./svg/logo.svg" className="logo" alt="logo" />
        <p className="mt-3">Bienvenue sur ma page React</p>
        <a onClick={this.handleClick} className="link" href="#me">
          Présentation
        </a>
        <PlayerAudio audio="Plongee-Nocturne.mp3" />
      </header>
    );
  }
}

export default Header;
