import React, { Component } from 'react';
import "./absolutNav.css";

class AbsolutNav extends Component {
  constructor(){
    super()
    this.state = {
      subCircles: [
        { class: "subCircleActive" },
        { class: "subCircle" },
        { class: "subCircle" },
        { class: "subCircle" },
        { class: "subCircle" },
        { class: "subCircle" },
      ],
      navigations: [
        { class: "navActive", title: "Presentation", target: "header" },
        {
          class: "nav",
          title: "Expériences Professionnelles",
          target: "career",
        },
        { class: "nav", title: "Développement", target: "skills" },
        { class: "nav", title: "Portfolio des productions", target: "productions" },
        { class: "nav", title: "Solutions", target: "widgets" },
        { class: "nav", title: "Contact", target: "contact" },
      ],
    };
  }

  handleClickScrollTo = (event, elementKey) => {
    const copyState = { ...this.state }
    let copyNavigations = copyState.navigations.map((nav, key) => {
      if(elementKey === key){
        return {class :"navActive", title : nav.title, target: nav.target };
      }else {
        return { class: "nav", title: nav.title, target: nav.target };
      }
    });
    let copySubCircles = copyState.subCircles.map((subCircle, key) => {
      if (elementKey === key) {
        return {class : "subCircleActive"};
      } else {
        return {class : "subCircle"};
      }
    });
    copyState.subCircles = copySubCircles;
    copyState.navigations = copyNavigations;

    this.setState(copyState);
    const targetId = document.querySelector(
      "#" + event.target.getAttribute("target")
    );
    targetId.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  render() {
    return (
      <div className="subNav" id="subNav">
        <div className="box1">
          {this.state.subCircles.map((subCircle, key, subCircles) => {
            return (
              <>
                <div className="circle">
                  <div className={subCircle.class} id={"subCircle" + key}>
                    <div className="innerCircle"></div>
                  </div>
                </div>
                {key !== subCircles.length - 1 ? (
                  <div className="pipe"></div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
        <div className="box2">
          {this.state.navigations.map((nav, key, navigations) => {
            return (
              <div key={key}>
                <div
                  className={nav.class}
                  target={nav.target}
                  id={"nav" + key}
                  onClick={(event) => {
                    this.handleClickScrollTo(event, key);
                  }}
                >
                  {nav.title}
                </div>
                {key !== navigations.length - 1 ? (
                  <div className="space"></div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AbsolutNav;