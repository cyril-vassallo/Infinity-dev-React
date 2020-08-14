import React, { Component } from "react";

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
          <iframe
            src={this.props.url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            data-cookieconsent="marketing"
            title={this.props.title}
          >
            Pour profiter pleinement des vidéos Youtube directement sur cette
            page désactivez votre bloqueur de publicités pour ce site uniquement{" "}
          </iframe>
        </div>
      </>
    );
  }
}
export default YoutubePlayer;
