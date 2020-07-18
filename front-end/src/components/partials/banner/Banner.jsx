import React from "react";
import "./banner.css";

const Banner = ({title,background='background.jpg'}) =>{

    return (
      <div className="banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <img src={`img/banners/${background}` } alt="" />
              <h2>{title}</h2>  
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Banner;
