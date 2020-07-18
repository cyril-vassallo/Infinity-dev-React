import React, { Component } from 'react';
import Banner from '../partials/banner/Banner';
import Card from './card/Card';
import Map from './map/Map';
import './contact.css'
class Contact extends Component {
    state = {  }
    render() {
        return (
            <div className="container-fluid contact">
                <Banner title="Contact" background="background-7.jpg"/>
                <Card/>
                <Map/>
            </div>
            
        );
    }
}

export default Contact;