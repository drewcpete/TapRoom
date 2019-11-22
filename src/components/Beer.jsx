import React from "react";
import PropTypes from "prop-types";
import Bar from "./Bar";

function Beer(props) {

//   var imageStyle = {
//     width: "200",
//     // maxHeight: "150px",
//     backgroundColor: "grey",
//   };

  var galleryStyle = {
    margin: "0 auto 0 auto",
    backgroundColor: "grey",
    borderRadius: "20%"
  };

  var beerStyle = {
    width: "275px",
    height: "auto",
    textAlign: "center",
    padding: "15px",
  };

  var contentStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1% 1%",
  };

var barPercent = String((1984/props.amount)*100) + "%"
  console.log(barPercent)


  return (
    <div style={contentStyle}>
      <div style={galleryStyle} className="card">
        <div style={beerStyle} className="flex-item">
          <h3>{props.name}</h3>
          <p>Brewery: {props.brewery}</p>
          <p>${props.price}</p>
          <p>ABV: {props.abv}%</p>
          <p>{props.type}</p>
          <p>{props.pour}oz Pour</p>

          <Bar level={barPercent}/>


            

        </div>
              
      </div>
    </div>
  );
}


Beer.propTypes = {
  onNewBeerCreation: PropTypes.func,
  name: PropTypes.string,
  brewery: PropTypes.string,
  abv: PropTypes.string,
  amount: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
  pour: PropTypes.string
};

export default Beer;