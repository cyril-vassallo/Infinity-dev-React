import React, { Component } from "react";
import Banner from "./../../components/partials/banner/Banner";
import Document from "./../../components/document/Document";
import './downloads.css';
import FetchData from './../../services/FetchData';

class Downloads extends Component {
    constructor(){
        super()
        this.fetchData = new FetchData();
        this.state = {
          documents: null
        }
    }

    componentDidMount =  async() => {
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
        <Banner title="Téléchargement" background="background-5.jpg" />
        {this.state.documents && this.state.documents.map( (document, key) => {
            return <Document key={key} document={document} />
        })}
      </div>
    );
  }
}

export default Downloads;
