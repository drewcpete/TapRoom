import React from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";






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
};
export default BeerList;