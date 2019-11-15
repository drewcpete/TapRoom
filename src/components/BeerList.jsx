import React from "react";
import Beer from "./Beer";



var MasterBeerList = [
  {
    name: "Negra Modelo",
    brewery: "Modelo",
    abv: "5.4",
    amount: 147,
    price: 3.75,
    type: "Amber"
  },
  {
    name: "PBR",
    brewery: "Pabst",
    abv: "4.6",
    amount: 147,
    price: 2.50,
    type: "Lager"
  },
  {
      name: "Total Domination",
      brewery: "Ninkasi",
      abv: "6.7",
      amount: 147,
      price: 5.00,
      type: "IPA"
  },
  {
    name: "Total Domination",
    brewery: "Ninkasi",
    abv: "6.7",
    amount: 147,
    price: 5.00,
    type: "IPA"
},
];


function BeerList() {    
  return(
    <div>
      <h2>Current beer list!</h2>
      <hr/>
      {MasterBeerList.map((beer, index) =>
        <Beer name={beer.name}
          brewery={beer.brewery}
          abv={beer.abv}
          amount={beer.amount}
          price={beer.price}
          type={beer.type}
          key={index}/>
        
      )}
    </div>
  );
}
export default BeerList;