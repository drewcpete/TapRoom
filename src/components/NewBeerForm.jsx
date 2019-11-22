import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { Redirect } from "react-router-dom";


function NewBeerForm(props) {

  let toHome = false;
  let _brewery = null;
  let _name = null;
  let _abv = null;
  let _type = null;
  let _pour = null;
  let _price = null;
  let _amount = "1984";



  function handleNewBeerSubmit(event) {
    event.preventDefault();
    props.onNewBeerCreation({ name: _name.value, brewery: _brewery.value, abv: _abv, type: _type, pour: _pour, price: _price, amount: _amount, id: v4() });
    _brewery= "";
    _name= "";
    _abv= "" ;
    _type= "";
    _pour= "";
    _price= "";


  }


  return (
    <div>
      <form onSubmit={handleNewBeerSubmit}>
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
        <button type="submit">Save Beer</button>
      </form>    
    </div>
  );
}


NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;