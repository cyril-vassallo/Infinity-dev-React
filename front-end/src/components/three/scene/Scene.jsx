import React, { Component } from "react";
import * as THREE from "three";
import "./scene.css";

class Scene extends Component {
  constructor() {
    super();
    this.isMobileDevice = null;
    this.scene = new THREE.Scene();
    this.camera = null;
    this.renderer = null;
    this.canvas = null;
    this.distance = 1200;
    this.meshCard = null;
    this.meshSun = null;
    this.meshPlanet = null;
    this.meshRocks = [];
  }

  /**
   * Script Start Execution on component
   */
  componentDidMount = () => {
    this.init();
    this.createCardElement();
    this.createRockElements();
    this.createPlanetElement();
    this.createSunElement();
    this.rotateRocks();
    this.rotateSun();
    this.rotatePlanet();
    this.rotateCard()
    this.addEventListeners();
  };

  addEventListeners = () => {
    document.addEventListener("mousemove", this.handleMouseMove, false);
    window.addEventListener("resize", this.handleWindowResize, false);
    document.addEventListener("wheel", this.handleMouseRoll, false);
    document.addEventListener("dblclick", this.handleDoubleClick, false);
  };

  /**
   * Initialize this.scene , this.camera, this.renderer and this.canvas
   */
  init = () => {
    const fos = 50;
    const ratio = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 200000;
    this.camera = new THREE.PerspectiveCamera(fos, ratio, near, far);
    if (window.innerWidth < 500) {
      this.distance = 1400;
    }
    this.camera.position.z = this.distance;
    this.camera.lookAt(this.scene.position);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.canvas = document.querySelector("#web-gl-scene");

    this.canvas.appendChild(this.renderer.domElement);
  };

  /**
   * Create and render Elements
   */
  createCardElement = () => {

    const path = "img/card/";
    const format = ".jpg";
    const url =// [
      path + "card" + format
    //   path + "card" + format,
    //   path + "card" + format,
    //   path + "card" + format,
    //   path + "card" + format,
    //   path + "card" + format,
    // ]
    ;
    
    const textureCard = new THREE.TextureLoader()

      .load(url);

    const geometryCard = new THREE.BoxGeometry(100, 60, 1);
 
    //A material need texture or a basic material
    const materialCard = new THREE.MeshBasicMaterial({
      map: textureCard,
      opacity: 0
    });

    //A Mesh need a geometry and material object
    this.meshCard = new THREE.Mesh(geometryCard, materialCard);
    this.meshCard.position.x = 0;
    this.meshCard.position.y = 0;
    this.meshCard.position.z = 1050;

    this.scene.add(this.meshCard);
  };

  /**
   * Create and render Elements
   */
  createRockElements = () => {
    const textureRock = new THREE.TextureLoader().load("img/card/rock.jpg");
    const materialRock = new THREE.MeshBasicMaterial({
      map: textureRock,
      opacity: 0.5,
    });
    const max = 2000;
    const maxSize = Math.floor(Math.random() * Math.floor(200));
    for (let i = 0; i < Math.floor(Math.random() * Math.floor(10)); i++) {
      const geometryRock = new THREE.SphereBufferGeometry(
        Math.random() * Math.floor(maxSize),
        8,
        8
      );
      //A material need texture or a basic material

      //A Mesh need a geometry and material object
      const meshRock = new THREE.Mesh(geometryRock, materialRock);
      meshRock.position.x = Math.floor(
        Math.random() * Math.floor(max) - window.innerWidth
      );
      meshRock.position.y = Math.floor(
        Math.random() * Math.floor(max) - window.innerHeight
      );
      meshRock.position.z = Math.floor(Math.random() * Math.floor(max) - 600);
      meshRock.name = "Rock" + i;
      this.scene.add(meshRock);
      this.meshRocks.push(meshRock);
    }
  };

  createPlanetElement = () => {
    const texturePlanet = new THREE.TextureLoader().load(
      "img/card/earth-night.jpg"
    );
    const materialPlanet = new THREE.MeshBasicMaterial({
      map: texturePlanet,
      opacity: 1,
    });
    const geometryPlanet = new THREE.SphereBufferGeometry(500, 30, 30);
    this.meshPlanet = new THREE.Mesh(geometryPlanet, materialPlanet);
    this.meshPlanet.name = "Planet";
    this.meshPlanet.position.x = 500;
    this.meshPlanet.position.y = 0;
    this.meshPlanet.position.z = -1000;
    this.scene.add(this.meshPlanet);
  };

  createSunElement = () => {
    const textureSun = new THREE.TextureLoader().load("img/card/sun.jpg");
    const materialSun = new THREE.MeshBasicMaterial({
      map: textureSun,
      opacity: 1,
    });
    const geometrySun = new THREE.SphereBufferGeometry(15000, 30, 30);
    this.meshSun = new THREE.Mesh(geometrySun, materialSun);
    this.meshSun.name = "Sun";
    this.meshSun.position.x = 15000;
    this.meshSun.position.y = 0;
    this.meshSun.position.z = -15000;
    this.scene.add(this.meshSun);
  };

  /**
   * Manage mouse roll effect
   */
  handleDoubleClick = () => {
    this.camera.position.z = this.distance;
    this.renderer.render(this.scene, this.camera);
  };

  /**
  /**
   * Manage mouse roll effect
   */
  handleMouseRoll = () => {
    this.camera.position.z += 5;
    this.renderer.render(this.scene, this.camera);
  };

  /**
   * Manage animations mouse mouve effect
   */
  handleMouseMove = (e) => {
    const mouseX = (e.clientX - window.innerWidth/2) * 0.1;
    const mouseY = (e.clientY - window.innerHeight/2) * 0.1;
    this.camera.position.x = mouseX;
    this.camera.position.y = -mouseY;
    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);
  };

  /**
   * Manage camera aspect on window resize
   */
  handleWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    if (window.innerWidth < 500) {
      this.isMobileDevice = true;
      if (this.isMobileDevice) {
        this.distance = 1500;
        this.camera.position.z = this.distance;
        this.camera.lookAt(this.scene.position);
        this.renderer.render(this.scene, this.camera);
      }
    } else {
      this.isMobileDevice = false;
      if (!this.isMobileDevice) {
        this.distance = 1200;
        this.camera.position.z = this.distance;
        this.camera.lookAt(this.scene.position);
        this.renderer.render(this.scene, this.camera);
      }
    }
  };

  /*Make the mesh rotate */
  rotateCard = () => {
    requestAnimationFrame(this.rotateCard);
    this.meshCard.rotation.x = 0.5;
    this.meshCard.rotation.y += 0.01;
    this.meshCard.rotation.z = 0.5;
    this.renderer.render(this.scene, this.camera);
  };

  /** Make the planet rotate */
  rotatePlanet = () => {
    requestAnimationFrame(this.rotatePlanet);
    this.meshPlanet.rotation.x += 0.0;
    this.meshPlanet.rotation.y += 0.005;
    this.renderer.render(this.scene, this.camera);
  };
   /**Make the sun rotate */
  rotateSun = () => {
    requestAnimationFrame(this.rotateSun);
    this.meshSun.rotation.x += 0.0;
    this.meshSun.rotation.y += 0.0001;
    this.renderer.render(this.scene, this.camera);
  };

  /** Make the rocks rotate*/
  rotateRocks = () => {
    requestAnimationFrame(this.rotateRocks);
    this.meshRocks.forEach((meshRock) => {
      meshRock.rotation.x += 0.01;
      meshRock.rotation.y += 0.005;
      this.renderer.render(this.scene, this.camera);
    });
  };

  render() {
    return (
      <div id="web-gl-scene"></div>
    );
  }
}

export default Scene;
