import React from 'react';
import { useEffect } from "react";
import "./banner.css";
import AOS from "aos";

export default function Banner({
  title = "Ici mon titre",
  background = "header2.jpg",
  position = 0,
  handleMouseEnter = () => {},
}) 
{
  const setPosition = () => {
    handleMouseEnter(position);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="banner" onMouseEnter={setPosition}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img src={`/img/banners/${background}`} alt="" />
            <h2 data-aos="fade-up">{title.toUpperCase()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
