import React from "react";

const Banner = ({ title, background = "background.jpg" , position = 0, handleMouseEnter }) => {

 const setPosition = () => {
   handleMouseEnter(position);
 }

  return (
    <div data-aos="fade-up" className="banner" onMouseEnter={setPosition}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img src={`img/banners/${background}`} alt="" />
            <h2 data-aos="fade-in">{title.toUpperCase()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
