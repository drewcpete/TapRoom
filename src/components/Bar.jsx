import React from "react";
import Keg from "../assets/img/keg.png";



function Bar(props) {

  var level = String(props.level);
  var barColor = String(props.barColor);
  console.log(level);
  var bar = {
    backgroundColor: "green",
    height: level,
    background: barColor,
    maxHeight: "100px", 
    maxWidth: "100px",
    margin: "0 0 0 30%"
 };
var keg = {
    height: "100px"
}

  return (
    <div>
      <div style={bar}>
        <img src={Keg} alt="keg" />
      </div>
      <p>{props.level}</p>
    </div>
  );
}



export default Bar;