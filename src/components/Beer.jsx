import React from "react";
import PropTypes from "prop-types";
import Keg from "../assets/img/keg.png";

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
    padding: "15",
  };

  var contentStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1% 1%",
  };
  var keg = {
    height: "50px",
    backgroundColor: "green",
  };


  return (
    <div style={contentStyle}>
      <div style={galleryStyle} className="card">
        <div style={beerStyle} className="flex-item">
          <h3>{props.name}</h3>
          <p>Brewery: {props.brewery}</p>
          <p>${props.price}</p>
          <p>ABV: {props.abv}%</p>
          <p>{props.type}</p>
          <div >
          
            <img style={keg} src={Keg} alt="keg"/>
          </div>
          <button className="btn btn-warning">Pour this beer!</button>

            

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
  type: PropTypes.string
};

export default Beer;