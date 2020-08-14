import React, { Component } from "react";
import Banner from "../src/components/partials/banner/Banner";
import Document from "../src/components/document/Document";
import FetchData from '../src/services/FetchData';
import Navigation from '../src/components/partials/nav/Navigation';
import Footer from "../src/components/partials/footer/Footer";

class Downloads extends Component {
    constructor(){
        super()
        this.fetchData = null;
        this.state = {
          documents: null
        }
    }

    componentDidMount =  async() => {
      this.fetchData =  new FetchData();
      await this.fetchData.getData(this.fetchSuccess, "documents");
    }

    fetchSuccess = ({documents}) => {
        const copyState = { ...this.state };
        copyState.documents = documents;
        this.setState(copyState);
    }

  render() {
    return (
      <div className="downloads" id="downloads">
        <Navigation/>
        <Banner title="Téléchargement" background="background-5.jpg" />
        {this.state.documents && this.state.documents.map( (document, key) => {
            return <Document key={key} document={document} />
        })}
        <Footer/>
      </div>
    );
  }
}

export default Downloads;
