import React from "react";
import Beer from "./Beer";
import PropTypes from 'prop-types';



var MasterBeerList = [
  {
    name: "Negra Modelo",
    brewery: "Modelo",
    abv: "5.4",
    amount: "1984",
    price: "3.75",
    type: "Amber",
    pour: "16"
  },
  {
    name: "PBR",
    brewery: "Pabst",
    abv: "4.6",
    amount: "1984",
    price: "2.50",
    type: "Lager",
    pour: "16"
  },
  {
    name: "Total Domination",
    brewery: "Ninkasi",
    abv: "6.7",
    amount: "1984",
    price: "5.00",
    type: "IPA",
    pour: "16"
  },
  {
    name: "Twister Creek IPA",
    brewery: "Denali Brewing",
    abv: "6.7",
    amount: "1984",
    price: "5.00",
    type: "IPA",
    pour: "16"
  },
  {
    name: "REALLY TIED THE ROOM TOGETHER",
    brewery: "Ex Novo",
    abv: "5.4",
    amount: "1984",
    price: "5.00",
    type: "Hazy DIPA",
    pour: "16"
  },
  {
    name: "Pilsner",
    brewery: "Pfriem",
    abv: "4.9",
    amount: "1984",
    price: "5.00",
    type: "Pilsner",
    pour: "16"
  },
  {
    name: "Whiskey Barrel Aged Abominable Winter Ale",
    brewery: "HUB",
    abv: "10.2",
    amount: "1984",
    price: "5.00",
    type: "Winter Ale",
    pour: "10"
  },

];


function BeerList(props) {
  return (
    <div>
      <h2>Current beer list!</h2>
      <hr />
      {props.beerList.map((beer,i) =>
        <Beer name={beer.name}
          brewery={beer.brewery}
          abv={beer.abv}
          amount={beer.amount}
          price={beer.price}
          type={beer.type}
          pour={beer.pour}
          key={beer.id} 
          index={i}
          />
      )}
    </div>
  );
}

BeerList.PropTypes = {
  beerList: PropTypes.array,
}
export default BeerList;