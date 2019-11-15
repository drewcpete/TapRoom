import React from "react";
import Beer from "./Beer";



var MasterBeerList = [
  {
    name: "Negra Modelo",
    brewery: "Modelo",
    abv: "5.4",
    amount: 147,
    price: 3.75
  },
  {
    name: "PBR",
    brewery: "Pabst",
    abv: "4.6",
    amount: 147,
    price: 2.50
  },
];


function BeerList() {
  return(
    <div>
        <h2>Currently available beers!</h2>
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