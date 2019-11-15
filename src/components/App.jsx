import React from "react";
import BeerList from "./BeerList";
import { Switch, Route } from "react-router-dom";
// import ClassList from "./ClassList";
import Home from "./Home";
import NavBar from "./NavBar";
import Error404 from "./Error404";

function App(){
  var siteStyle = {
    backgroundColor : "burlywood",
  };
  return (
    <div style={siteStyle} className="container">


      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/Beer" component={BeerList} />
        {/* <Route path ='/Class' component={ClassList} /> */}
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;