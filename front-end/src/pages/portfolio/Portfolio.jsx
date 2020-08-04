import React, { Component } from 'react';
import Skills from './../../components/skills/Skills'
import Career from './../../components/career/Career';
import Contact from './../../components/contact/Contact';
import About from '../../components/about/About';
import Widgets from '../../components/widgets/Widgets';
import Productions from './../../components/Productions/Productions';
import Header from '../../components/partials/header/Header';
import AbsolutNav from './../../components/partials/absolutNav/AbsolutNav';
import Footer from "./../../components/partials/footer/Footer";
import './portfolio.css'


class Portfolio extends Component {
    state = {  }
    render() {
        return (
          <main className="portfolio">
            <AbsolutNav/>
            <Header />
            <About />
            <Career />
            <Skills />
            <Productions />
            <Widgets />
            <Contact />
            <Footer/>
          </main>
        );
    }
}

export default Portfolio;