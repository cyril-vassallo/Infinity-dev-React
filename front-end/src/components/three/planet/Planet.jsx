import React, { Component } from "react";
import * as THREE from "three";

class Planet extends Component {
  constructor(props) {
    super(props);
    this.isMobileDevice = null;
    this.scene = new THREE.Scene();
    this.camera = null;
    this.renderer = null;
    this.canvas = null;
    this.distance = 1200;
    this.meshPlanet = null;
    this.isRotate = false;
    this.animation = null;
  }

  /**
   * React
   * Script Start Execution on component
   */
  componentDidMount = () => {
    this.init();
    this.createPlanetElement();
  };

  /**
   * Three.js
   * Initialize this.scene , this.camera, this.renderer and this.canvas
   */
  init = () => {
    const fos = 50;
    const ratio = (window.innerWidth) / (window.innerHeight / 2);
    const near = 0.1;
    const far = 200000;
    this.camera = new THREE.PerspectiveCamera(fos, ratio, near, far);
    if (window.innerWidth < 500) {
      this.distance = 2000;
    }
    this.camera.position.z = this.distance;
    this.camera.lookAt(this.scene.position);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight / 2);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.canvas = document.querySelector("#web-gl-planet");

    this.canvas.appendChild(this.renderer.domElement);
    window.addEventListener("resize", this.onWindowResize, false);
  };

  /**
   * Three.js
   * Create and set the Planet
   */
  createPlanetElement = () => {
    const texturePlanet = new THREE.TextureLoader().load("img/card/rock.jpg");
    const materialPlanet = new THREE.MeshBasicMaterial({
      map: texturePlanet,
      opacity: 1,
    });
    const geometryPlanet = new THREE.SphereBufferGeometry(500, 20, 20);
    this.meshPlanet = new THREE.Mesh(geometryPlanet, materialPlanet);
    this.meshPlanet.name = "Planet";
    this.meshPlanet.position.x = 0;
    this.meshPlanet.position.y = 0;
    this.meshPlanet.position.z = -100;
    this.scene.add(this.meshPlanet);
    this.planetAnimationManagement(this.rotatePlanet, this.stopRotatePlanet);
  };

  /**
   * three.js
   * Rotate the planet
   */
  rotatePlanet = () => {
    setTimeout(()=>{
      this.animation = requestAnimationFrame(this.rotatePlanet);
      this.meshPlanet.rotation.y += 0.002 ;
      this.renderer.render(this.scene, this.camera);
    },30)
  };

  /**
   * three.js
   * Stop the planet rotate
   */
  stopRotatePlanet = () => {
    cancelAnimationFrame(this.animation);
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
  };

  /**
   * Javascript -  IntersectionObserver  event
   * Manage planet animation
   */
  planetAnimationManagement = (rotatePlanet, stopRotatePlanet) => {
    const options = {
      root: null,
      rootMargin: "200px",
      threshold: 1.0,
    };
    this.visibilityCallback = (entries, observe) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio > 0) {
            if (!this.isRotate) {
              console.log("start rotate Planet");
              rotatePlanet();
              this.isRotate = true;
            }
          }
        } else {
          console.log("stop planet")
          stopRotatePlanet();
          this.isRotate = false;
        }

        //
      });
    };
    const observer = new IntersectionObserver(this.visibilityCallback, options);
    observer.observe(this.canvas);
  };

  /**
   * Javascript
   * Redefine camera view and camera ration on resize event
   */
  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / (window.innerHeight / 2);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight / 2);
    if (window.innerWidth < 500) {
      this.isMobileDevice = true;
      if (this.isMobileDevice) {
        this.distance = 2500;
        this.camera.position.z = this.distance;
        this.camera.lookAt(this.scene.position);
        this.renderer.clear();
        this.this.renderer.render(this.scene, this.camera);
      }
    } else {
      this.isMobileDevice = false;
      if (!this.isMobileDevice) {
        this.distance = 1200;
        this.camera.position.z = this.distance;
        this.camera.lookAt(this.scene.position);
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
      }
    }
  };

  /**
   * React
   */
  render() {
    return (
      <div id="web-gl-planet"></div>
    );
  }
}

export default Planet;
