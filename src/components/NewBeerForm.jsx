import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { Redirect } from "react-router-dom";
import Beer from "./Beer"


function NewBeerForm(props) {
  console.log(props)
  // let toHome = false;
  let _brewery = null;
  let _name = null;
  let _abv = null;
  let _type = null;
  let _pour = null;
  let _price = null;
  let _amount = null;

  function handleNewBeerSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    props.onNewBeerCreation({name: _name.value, brewery: _brewery.value, abv: _abv.value, type: _type.value, pour: _pour.value, price: _price.value, amount: _amount.value, id: v4() });
    _brewery.value= "";
    _name.value= "";
    _abv.value= "" ;
    _type.value= "";
    _pour.value= "";
    _price.value= "";
    _amount.value= "";
  }

  return (
    <div>
      <form onSubmit={handleNewBeerSubmission}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          ref={(input) => { _name = input; }} />
        <hr />
        <input
          type="text"
          id="brewery"
          placeholder="Brewery"
          ref={(input) => { _brewery = input; }} />
        <hr />
        <input
          type="text"
          id="type"
          placeholder="Type"
          ref={(input) => { _type = input; }} />
        <hr />
        <input
          type="text"
          id="abv"
          placeholder="ABV"
          ref={(input) => { _abv = input; }} />
        <hr />
        <input
          type="text"
          id="price"
          placeholder="Price"
          ref={(input) => { _price = input; }} />
        <hr />
        <input
          type="text"
          id="pour"
          placeholder="Pour Size"
          ref={(input) => { _pour = input; }} />
        <hr />
        <input
          type="text"
          id="amount"
          placeholder="Quantity"
          ref={(input) => { _amount = input; }} />
        <hr />
        <button type="submit">Save Beer</button>
      </form>    
    </div>
  );
}


NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;