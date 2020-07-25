import React, { Component } from "react";
import Presentation from "../presentation/Presentation";
import Banner from "../partials/banner/Banner";
import Projects from "./projects/Projects";
import "./productions.css";
import FetchData from "./../../services/FetchData";

class Productions extends Component {
  state = {
    data: null,
    error: null,
  };

  componentDidMount = async () => {
    const fetchData = new FetchData();
    try {
      await fetchData.getData(this.fetchSuccess);
    } catch (error) {
      this.fetchFailed(error);
    }
  };

  fetchSuccess = (data) => {
    const copyState = { ...this.state };
    copyState.data = data;
    this.setState(copyState);
  };

  fetchFailed = (error) => {
    const copyState = { ...this.state };
    copyState.error = error.message;
    console.log(copyState);
    this.setState(copyState);
  };

  render() {
    return (
      <div className="products">
        <Banner
          title="Portfolio des productions"
          background="background-9.jpg"
        />
        <h3 className="text-center my-5 text-primary">
          Synopsis des productions
        </h3>
        <div className="container presentation">
          <div className="row my-5 ">
            <div className="col" id="presentation">
              {this.state.data && (
                <Presentation images={this.state.data.synopsis} />
              )}
              {this.state.error && (
                <p className="alert alert-danger">
                  Erreur, la récupération des données a échouée :{" "}
                  {this.state.error}
                </p>
              )}
            </div>
          </div>
        </div>
        {this.state.data && <Projects images={this.state.data} />}
      </div>
    );
  }
}

export default Productions;
