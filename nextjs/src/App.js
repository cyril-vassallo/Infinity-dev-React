import React from "react";  
//import { Route, Switch } from "react-router-dom";
import Portfolio from "./pages/portfolio/Portfolio";
import Downloads from "./pages/downloads/Downloads";
import Demo from "./pages/demo/Demo"





function App() {
  return (

      <div className="App" id="app">  
      <Portfolio/>     
        {/* <Switch>
          <Route path="/downloads" component={Downloads} />
          <Route path="/demo" component={Demo} />
          <Route path="/" component={Portfolio} />
        </Switch> */}
      </div>


  );
}

export default App;
