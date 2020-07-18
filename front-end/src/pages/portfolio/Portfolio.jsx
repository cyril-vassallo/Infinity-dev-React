import React, { Component } from 'react';
import Skills from './../../components/skills/Skills'
import Career from './../../components/career/Career';
import Contact from './../../components/contact/Contact';
import Weather from '../../components/weather/Weather';
import About from '../../components/about/About';
import Productions from './../../components/Productions/Productions';
import './portfolio.css'

class Portfolio extends Component {
    state = {  }
    render() {
        return (
          <main className="portfolio">
            <About/>
            <Career />
            <Skills />
            <Productions/>
            <Weather />
            <Contact />
          </main>
        );
    }
}

export default Portfolio;