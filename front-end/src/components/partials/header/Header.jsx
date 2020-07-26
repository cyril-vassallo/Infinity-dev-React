import React, { Component } from 'react';
import "./header.css"
import Player from '../../player/Player';



class Header extends Component {
    handleClick = () =>  {
     const about = document.getElementById('about');
     about.scrollIntoView();
    }
    
    render() {
        return (
          <header className="header">
            <div className="row my-5">
              <div className="col">
                <h2>Cyril VASSALLO</h2>
                <h3 className="text-center text-primary">
                  Développeur web <br/>Javascript - PHP Fullstack
                </h3>
              </div>
            </div>
            <img src="./img/circle.png" className="logo" alt="logo" />
            <p className="mt-3">Bienvenue sur ma page React</p>
            <a onClick={this.handleClick} className="link" href="#me">
              Présentation
            </a>
            <Player/>
          </header>
        );
    }
}

export default Header;