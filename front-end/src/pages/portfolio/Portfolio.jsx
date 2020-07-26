import React, { Component } from 'react';
import Skills from './../../components/skills/Skills'
import Career from './../../components/career/Career';
import Contact from './../../components/contact/Contact';
import About from '../../components/about/About';
import Widgets from '../../components/widgets/Widgets';
import Productions from './../../components/Productions/Productions';
import Header from '../../components/partials/header/Header';
import './portfolio.css'

class Portfolio extends Component {
    state = {  }
    render() {
        return (
          <main className="portfolio">
            <Header/>
            <About />
            <Career />
            <Skills />
            <Productions />
            <Widgets />
            <Contact />
          </main>
        );
    }
}

export default Portfolio;