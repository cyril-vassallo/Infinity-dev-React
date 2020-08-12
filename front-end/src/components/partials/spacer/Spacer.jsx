import React, { useState } from "react";
import "./spacer.css";
import {fadeInEffect, fadeOutEffect} from './../../../services/utils'

function Spacer({ spacerNumber = "0" }) {
  /**
   * hook on functional component
   */
  let [isClosed, setIsClosed] = useState(true);

  /**
   * Toggle project detail display
   * @param {object} event
   */
  const handleCLickToggle = (event) => {
    let target = document.querySelector("#details" + spacerNumber);
    if (target.style.display === "flex") {
      document.querySelector("#sound").play();
      fadeOutEffect(target);
      setIsClosed(true);
      target.previousSibling.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      //target.previousSibling.scroll({ top: 100,left:0, behavior : 'smooth' });
    } else {
      document.querySelector("#sound").play();
      fadeInEffect(target,60);
      setIsClosed(false);
      target.previousSibling.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      //target.previousSibling.scroll({ top: 100, left: 0, behavior: "smooth" });
    }
  };


  return (
    <div className="container spacer mb-5">
      <div className="row">
        <div className="col text-center mb-1">
          {isClosed ? (
            <p className="text-success" onClick={handleCLickToggle}>
              Montrer les détails...
            </p>
          ) : (
            <p className="text-danger" onClick={handleCLickToggle}>
              Cacher les détails
            </p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-5 text-right">_____________</div>
        <div className="col-2 text-center" onClick={handleCLickToggle}>
          {isClosed ? (
            <img src="img/rowdown.png" alt="" />
          ) : (
            <img src="img/rowup.png" alt="" />
          )}
        </div>
        <div className="col-5">_____________</div>
      </div>
      <audio id="sound">
        <source src="media/music/sound.mp3" />
      </audio>
    </div>
  );
}

export default Spacer;
