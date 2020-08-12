import React from "react";
import "./banner.css";

const Banner = ({ title, background = "background.jpg" , position = 0, handleMouseEnter }) => {

 const setPosition = () => {
   handleMouseEnter(position);
 }

  return (
    <div className="banner" onMouseEnter={setPosition}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img src={`img/banners/${background}`} alt="" />
            <h2>{title.toUpperCase()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
