import React, { Component } from "react";
import "./youtubePlayer.css";
import Iframe from "react-iframe";


class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h5 className="text-success">{this.props.title}</h5>
        <div className="iframe-container">
          <Iframe
            url={this.props.url}
            frameBorder="0"
            allow="fullscreen"
          />
          ;
        </div>
      </>
    );
  }
}
export default YoutubePlayer;
