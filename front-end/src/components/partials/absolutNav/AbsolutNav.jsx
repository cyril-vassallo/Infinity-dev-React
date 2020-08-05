import React, { Component } from "react";
import { fadeOutEffect, fadeInEffect } from "./../../../services/utils";
import "./absolutNav.css";

class AbsolutNav extends Component {
  constructor() {
    super();
    this.state = {
      navigations: [
        {
          subCircleClass: "subCircleActive",
          navigationClass: "navActive",
          title: "Presentation",
          target: "header",
        },
        {
          subCircleClass: "subCircle",
          navigationClass: "nav",
          title: "Expériences Professionnelles",
          target: "career",
        },
        {
          subCircleClass: "subCircle",
          navigationClass: "nav",
          title: "Développement",
          target: "skills",
        },
        {
          subCircleClass: "subCircle",
          navigationClass: "nav",
          title: "Portfolio des productions",
          target: "productions",
        },
        {
          subCircleClass: "subCircle",
          navigationClass: "nav",
          title: "Démonstrations",
          target: "widgets",
        },
        {
          subCircleClass: "subCircle",
          navigationClass: "nav",
          title: "Contact",
          target: "contact",
        },
      ],
    };
  }

  handleClickClose = () => {
    const subNav = document.querySelector("#subNav");
    const arrow = document.querySelector("#arrow");
    fadeOutEffect(subNav);
    fadeInEffect(arrow);

    // console.log(subNav);
    // subNav.style.left = "-1000px";
  };
  handleClickOpen = () => {
    const subNav = document.querySelector("#subNav");
    const arrow = document.querySelector("#arrow");
    fadeInEffect(subNav);
    fadeOutEffect(arrow);
  };

  handleClickScrollTo = (event, elementKey) => {
    const copyState = { ...this.state };
    let copyNavigations = copyState.navigations.map((nav, key) => {
      if (elementKey === key) {
        return {
          subCircleClass: "subCircleActive",
          navigationClass: "navActive",
          title: nav.title,
          target: nav.target,
        };
      } else {
        return {
          subCircleClass: "subCircle",
          navigationClass: "nav",
          title: nav.title,
          target: nav.target,
        };
      }
    });
    copyState.navigations = copyNavigations;

    this.setState(copyState);
    const targetId = document.querySelector(
      "#" + event.target.getAttribute("target")
    );
    targetId.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    this.handleClickClose();
  };

  render() {
    return (
      <>
        <div className="arrow" id="arrow" onClick={this.handleClickOpen}>
          <p>
            <span>
              <img src="svg/arrow.svg" alt="" />
            </span>{" "}
            Navigation{" "}
          </p>
        </div>
        <div className="subNav container-fluid" id="subNav">
          <div className="row">
            <div className="col">
              <img
                className="close"
                src="svg/close.svg"
                alt="close"
                onClick={this.handleClickClose}
              />
            </div>
          </div>
          <div className="row">
            <div className="col box">
              {" "}
              <div className="box1">
                {this.state.navigations.map((subCircle, key, navigations) => {
                  return (
                    <div key={key}>
                      <div key={key} className="circle">
                        <div
                          className={subCircle.subCircleClass}
                          id={"subCircle" + key}
                        >
                          <div className="innerCircle"></div>
                        </div>
                      </div>
                      {key !== navigations.length - 1 ? (
                        <div className="pipe"></div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="box2">
                {this.state.navigations.map((nav, key, navigations) => {
                  return (
                    <div key={key}>
                      <div
                        className={nav.navigationClass}
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
          </div>
        </div>
      </>
    );
  }
}

export default AbsolutNav;
