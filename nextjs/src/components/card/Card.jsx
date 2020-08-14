import React, { Component } from "react";
import Link from 'next/link'
import Planet from "../three/planet/Planet";
import YoutubePlayer from "../players/video/YoutubePlayer";

class Card extends Component {
  render() {
    return (
      <>
        <div className="container my-5">
          <div className="row">
            <div className="col">
              <h3 className="text-primary">Three.js</h3>
              <p>Une solution 3D Web-GL pour navigateur</p>
            </div>
          </div>
          <div className="row">
            <div className="col my-5 text-center">
              <YoutubePlayer
                title="Initiation à Three.js"
                url="https://www.youtube-nocookie.com/embed/b-1-5TqVZ28"
              />
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row text-center">
            <div className="col">
              <Planet />
            </div>
          </div>
          <div className="row">
            <div className="col my-5 text-center">
              <Link href="/demo">
                <button className="btn btn-success btn-lg">
                  Lancer la démo 3D
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
