import React from "react";
import BeerList from "./BeerList";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Error404 from "./Error404";
import Beer from "./Beer";
import NewBeer from "./NewBeer";


function App(){
  var siteStyle = {
    backgroundColor : "lightgray",
    borderRadius: "60px",
    padding: "25px",
    textAlign: "center",    
  };
  return (
    <div>

      <NavBar/>
      <div style={siteStyle} className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Beer" component={BeerList} />
          <Route path ="/NewBeer" component={NewBeer} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;