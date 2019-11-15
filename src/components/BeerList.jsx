import React from "react";
import Beer from "./Beer";



var MasterBeerList = [
  {
    name: "Negra Modelo",
    brewery: "Modelo",
    abv: "5.4",
    amount: 147,
    price: 2.75
  },
  {
    name: "Negra Modelo",
    brewery: "Modelo",
    abv: "4.6",
    amount: 147,
    price: 2.00
  },
];


function BeerList() {
  return(
    <div>

      <hr/>
      {MasterBeerList.map((beer, index) =>
        <Beer name={beer.name}
          brewery={beer.brewery}
          abv={beer.abv}
          amount={beer.amount}
          price={beer.price}
          key={index}/>
        
      )}
    </div>
  );
}
export default BeerList;