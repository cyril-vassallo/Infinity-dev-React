import React, { Component } from "react";

class Player extends Component {
  state = {
    audioElement: new Audio("media/music/Plongee-Nocturne.mp3"),
    isPlaying: false,
  };

  componentDidMount = () => {
    if (this.state.isPlaying) {
      this.state.audioElement.play();
    }
  };

  handleClickStopMusic = () => {
    this.state.audioElement.pause();
    const copyState = { ...this.state };
    copyState.isPlaying = false;
    this.setState(copyState);
  };

  handleClickPayMusic = () => {
    this.state.audioElement.play();
    const copyState = { ...this.state };
    copyState.isPlaying = true;
    this.setState(copyState);
  };

  render() {
    return (
      <div className="player container my-3 text-center">
        {this.state.isPlaying ? (
          <button
            className="btn btn-lg btn-danger"
            onClick={this.handleClickStopMusic}
          >
            Arrêter la musique
          </button>
        ) : (
          <button
            className="btn btn-lg btn-success"
            onClick={this.handleClickPayMusic}
          >
            Jouer la musique
          </button>
        )}
      </div>
    );
  }
}

export default Player;
