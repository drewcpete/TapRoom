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
    scale: "50%"
  };


  return (
    <div>
      <div>
        <img style={bar} src={Keg} alt="keg" />
      </div>
      <p>{props.level}</p>
    </div>
  );
}



export default Bar;