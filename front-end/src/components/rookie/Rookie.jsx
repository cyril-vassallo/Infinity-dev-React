import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Rookie extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (

            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h3 className="text-primary mb-5">Rookie</h3>
                        <p class="text-center">Un framework pour apprendre !</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <a
                            target="_blanc"
                            href="https://infinity-dev.fr/rookie"
                        >
                            <button className="btn btn-success btn-lg">
                                Découvrir Rookie !
                    </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rookie;