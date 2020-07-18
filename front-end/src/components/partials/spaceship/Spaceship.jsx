import React, { Component } from "react";

class Spaceship extends Component {

    constructor() {
            super();
            this.state = {
                x: null,
                y: null,
                x_old: null,
                y_old: null,
                shipTransformStyle: {}
            };
            document.addEventListener("mousemove", this.onMouseUpdate, false);
    }

    componentDidMount = () => {
        setInterval(() => {
        let x = this.state.x
        let y = this.state.y
        let x_old = this.state.x_old
        let y_old = this.state.y_old

        if (x_old && y_old && x != x_old || y != y_old) {
            this.setState(this.state.shipTransformStyle, {transform: "rotate(" + Math.atan2(x_old - x, y - y_old) + "rad)"})
        }
        this.setState(x_old, x);
        this.setState(y_old, y);
        }, 75);
    };
  

    onMouseUpdate = (e) => {
        this.setState(this.state.x, e.pageX - 10);
        this.setState(this.state.y, e.pageY - 10);
    };

    render() {
        return <img id="spaceship" src="assets/spaceship_c.png" style={() => { return {...this.state.shipTransformStyle, left: this.state.x, top: this.state.y } }} />;
    }
}
export default Spaceship;
