import React, { Component } from "react";
import * as THREE from "three";
import Link from 'next/link'
//import { openFullscreen, closeFullscreen } from "../../../services/utils";

class Scene extends Component {
  constructor() {
    super();
    this.audioElement = null;
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
   * Test Method
   */
  test = () => {
    this.removeMeshes();
  };

  /**
   * Script Start Execution on component
   */
  componentDidMount = () => {
    // openFullscreen();
    this.audioElement = new Audio("media/music/Gamma.mp3");
    this.audioElement.play();
    this.initScene();
    this.createSunMesh();
    this.createPlanetMesh();
    this.createCardMesh();
    this.createRockMeshes();
    this.rotatePlanet();
    this.rotateCard();
    this.rotateRocks();
    this.rotateSun();
    this.addEventListeners();

  };

  /**
   * Script stop Execution on component
   */
  componentWillUnmount = () => {
    this.audioElement.pause();
    this.removeEventListeners();
    this.removeMeshes();
    // closeFullscreen();
  };

  /**
   * Three.js
   * remove Mesh and  them components from the scene
   */
  removeMeshes = () => {
    this.scene
      .remove(this.meshCard)
      .remove(this.meshPlanet)
      .remove(this.meshSun);
    this.meshRocks.forEach((rock)=> {
      this.scene.remove(rock)
    });
    this.renderer.renderLists.dispose();
    this.renderer.clear();
  };

  /**
   * Remove all scene events
   */
  removeEventListeners = () => {
    this.canvas.removeEventListener("mousemove", this.handleMouseMove, false);
    window.removeEventListener("resize", this.handleWindowResize, false);
    this.canvas.removeEventListener("wheel", this.handleMouseRoll, false);
    this.canvas.removeEventListener("dblclick", this.handleDoubleClick, false);
  };

  /**
   * add all scene events
   */
  addEventListeners = () => {
    this.canvas.addEventListener("mousemove", this.handleMouseMove, false);
    window.addEventListener("resize", this.handleWindowResize, false);
    this.canvas.addEventListener("wheel", this.handleMouseRoll, false);
    this.canvas.addEventListener("dblclick", this.handleDoubleClick, false);
  };

  /**
   * Initialize this.scene , this.camera, this.renderer and this.canvas
   */
  initScene = () => {
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
      autoClear: true,
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
  createCardMesh = () => {
    const length = 100,
      width = 60,
      depth = 1,
      path = "img/card/",
      format = ".png";
    const url = "card" + format; // [
    //   path + "card" + format,
    //   path + "card" + format,
    //   path + "card" + format,
    //   path + "card" + format,
    //   path + "card" + format,
    // ]
    const texture = new THREE.TextureLoader().setPath(path).load(url);

    const geometry = new THREE.BoxGeometry(length, width, depth);

    //A material need texture or a basic material
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      opacity: 0.50,
    });

    //A Mesh need a geometry and material object
    this.meshCard = new THREE.Mesh(geometry, material);
    this.meshCard.name = "Card";
    this.meshCard.position.x = 0;
    this.meshCard.position.y = 0;
    this.meshCard.position.z = 1050;
    this.scene.add(this.meshCard);
    this.renderer.render(this.scene, this.camera);
    geometry.dispose();
    material.dispose();
    texture.dispose();
  };

  /**
   * Create and render Elements
   */
  createRockMeshes = () => {
    const texture = new THREE.TextureLoader().load("img/card/rock.jpg");
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      opacity: 0.5,
    });
    const max = 2000;
    const maxSize = Math.floor(Math.random() * Math.floor(200));
    for (let i = 0; i < Math.floor(Math.random() * Math.floor(10)); i++) {
      const geometry = new THREE.SphereBufferGeometry(
        Math.random() * Math.floor(maxSize),
        8,
        8
      );
      //A material need texture or a basic material

      //A Mesh need a geometry and material object
      const meshRock = new THREE.Mesh(geometry, material);
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
      geometry.dispose();
    }
    material.dispose();
    texture.dispose();
    this.renderer.render(this.scene, this.camera);
  };

  createPlanetMesh = () => {
    const texture = new THREE.TextureLoader().load("img/card/earth-night.jpg");
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      opacity: 1,
    });
    const geometry = new THREE.SphereBufferGeometry(500, 20, 20);
    this.meshPlanet = new THREE.Mesh(geometry, material);
    this.meshPlanet.name = "Planet";
    this.meshPlanet.position.x = 500;
    this.meshPlanet.position.y = 0;
    this.meshPlanet.position.z = -1000;
    this.scene.add(this.meshPlanet);
       this.renderer.render(this.scene, this.camera);
    geometry.dispose();
    material.dispose();
    texture.dispose();
  };

  createSunMesh = () => {
    const texture = new THREE.TextureLoader().load("img/card/sun.jpg");
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      opacity: 1,
    });
    const geometry = new THREE.SphereBufferGeometry(15000, 30, 30);
    this.meshSun = new THREE.Mesh(geometry, material);
    this.meshSun.name = "Sun";
    this.meshSun.position.x = 15000;
    this.meshSun.position.y = 0;
    this.meshSun.position.z = -15000;
    this.scene.add(this.meshSun);
    this.renderer.render(this.scene, this.camera);
    geometry.dispose();
    material.dispose();
    texture.dispose();
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
    const mouseX = (e.clientX - window.innerWidth / 2) * 0.1;
    const mouseY = (e.clientY - window.innerHeight / 2) * 0.1;
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
    setTimeout(() => {
      requestAnimationFrame(this.rotateCard);
      this.meshCard.rotation.x = 0.5;
      this.meshCard.rotation.y += 0.01;
      this.meshCard.rotation.z = 0.5;
      this.renderer.render(this.scene, this.camera);
    }, 60);
  };

  /** Make the planet rotate */
  rotatePlanet = () => {
    setTimeout(() => {
      requestAnimationFrame(this.rotatePlanet);
      this.meshPlanet.rotation.y += 0.005;
      this.renderer.render(this.scene, this.camera);
    }, 60);
  };

  /**Make the sun rotate */
  rotateSun = () => {
    setTimeout(() => {
      requestAnimationFrame(this.rotateSun);
      this.meshSun.rotation.y += 0.0001;
      this.renderer.render(this.scene, this.camera);
    }, 1000);
  };

  /** Make the rocks rotate*/
  rotateRocks = () => {
    setTimeout(() => {
      requestAnimationFrame(this.rotateRocks);
      this.meshRocks.forEach((meshRock) => {
        meshRock.rotation.x += 0.01;
        meshRock.rotation.y += 0.005;
        this.renderer.render(this.scene, this.camera);
      });
    }, 100);
  };

  render() {
    return (
      <div id="web-gl-scene">
        <Link href="/">
          <img src="svg/close.svg" alt="return to home" />
        </Link>
      </div>
     
    );
  }
}

export default Scene;
