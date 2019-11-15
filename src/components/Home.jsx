import React from "react";
import Bar from "../assets/img/bar.jpg";


var bar = {
  width: "90%",
  height: "auto"
};
function Home(){
  return (
    

    <div  className="container">
      <div className="welcome">
        <h4>Thanks for coming!</h4>
      </div>
      <div className="bar">
        <img style={bar} src={Bar} alt=""/>
      </div>
    </div>
  );
}
    
export default Home;