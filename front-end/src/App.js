import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Portfolio from "./pages/portfolio/Portfolio";
import Footer from "./components/partials/footer/Footer";
import Downloads from "./pages/downloads/Downloads";
import Demo from "./pages/demo/Demo"





function App() {
  return (
      <div className="App" id="app">       
        <Switch>
          {/* de la route la plus spécifique à la plus générique */}
          <Route path="/downloads" component={Downloads} />
          <Route path="/demo" component={Demo} />
          <Route path="/" component={Portfolio} />
        </Switch>
        <Footer/>
      </div>

  );
}

export default App;
