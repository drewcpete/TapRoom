import React from "react";
import PropTypes from "prop-types";

function Beer(props) {

//   var imageStyle = {
//     width: "200",
//     // maxHeight: "150px",
//     backgroundColor: "grey",
//   };

  var galleryStyle = {
    margin: "0 auto 0 auto",
    backgroundColor: "grey"
  };

  var beerStyle = {
    width: "500px",
    height: "500px",
    textAlign: "center",
    padding: "15",
  };

  var contentStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1% 1%",
  };


  return (
    <div style={contentStyle}>
      <div style={galleryStyle} className="card">
        <div style={beerStyle} className="flex-item">
          <h3>{props.name}</h3>
          <p>Brewery: {props.brewery}</p>
          <p>${props.price}</p>
          <p>ABV: {props.abv}%</p>
            

        </div>
              
      </div>
    </div>
  );
}


Beer.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  abv: PropTypes.string,
  amount: PropTypes.int,
  price: PropTypes.int,
};

export default Beer;