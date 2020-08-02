import React, { Component } from 'react';
import "./header.css"
import PlayerAudio from '../../players/audio/PlayerAudio';
import Typewriter from "typewriter-effect";
import Planet from '../../three/planet/Planet';

class Header extends Component {
    handleClick = () =>  {
     const about = document.getElementById('about');
     about.scrollIntoView();
    }
    
    render() {
        return (
          <header className="header" id="header">
            <div className="row my-5">
              <div className="col">
                <h2>Cyril VASSALLO</h2>
                <h3 className="text-center text-primary">
                  Développeur web <br />
                  <Typewriter
                    options={{
                      strings: ["Javascript", "PHP","React","Symfony","Node.js", "Nest", "fullstack"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>
              </div>
            </div>
            <Planet/>
            {/* <img src="./img/circle.png" className="logo" alt="logo" /> */}
            <p className="mt-3">Bienvenue sur ma page React</p>
            <a onClick={this.handleClick} className="link" href="#me">
              Présentation
            </a>
            <PlayerAudio />
          </header>
        );
    }
}

export default Header;