import React from "react";
import BeerList from "./BeerList";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Error404 from "./Error404";
import NewBeerForm from "./NewBeerForm";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: []
    };
    this.handleAddingNewBeer = this.handleAddingNewBeer.bind(this);
  }

  handleAddingNewBeer(newBeer){
    var newBeerList = this.state.masterBeerList.slice();
    newBeerList.push(newBeer)
    this.setState({masterBeerList: newBeerList})
  }


  render(){
    var siteStyle = {
      backgroundColor: "lightgray",
      borderRadius: "60px",
      padding: "25px",
      textAlign: "center",
    };
    return (
      <div>

        <NavBar />
        <div style={siteStyle} className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Beer" render={()=> <BeerList beerList={this.state.masterBeerList} />} />
            <Route path="/NewBeerForm" render={()=> <NewBeerForm onNewBeerCreation={this.handleAddingNewBeer}/>} />
            <Route render={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
  }
  

export default App;