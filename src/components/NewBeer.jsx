import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { Redirect } from 'react-router-dom';


class NewBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toHome: false,
      _name: null,
      _brewery: null,
      _abv: null,
      _type: null,
      _pour: null,
      _price: null,
      _amount: "1984",
    };
    this.handleSubmit = this.handleNewBeerSubmit.bind(this);
  }



  handleNewBeerSubmit(event) {
    event.preventDefault();
    this.props.onNewBeerCreation({ name: this.state._name.value, brewery: this.state._brewery.value, abv: this.state_abv, type: this.state._type, pour: this.state._pour, price: this.state_price, amount: this.state._amount, id: v4() });
    this.setState({ _brewery: '' });
    this.setState({ _name: '' });
    this.setState({ _abv: '' });
    this.setState({ _type: '' });
    this.setState({ _pour: '' });
    this.setState({ _price: '' });


  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewBeerSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            ref={(input) => { this.setState({_name: input}); }} />
<hr/>
          <input
            type="text"
            id="brewery"
            placeholder="Brewery"
            ref={(input) => { this.setState({ _brewery: input }); }} />
<hr/>
          <input
            type="text"
            id="type"
            placeholder="Type"
            ref={(input) => { this.setState({ _type: input }); }} />
<hr/>
          <input
            type="text"
            id="abv"
            placeholder="ABV"
            ref={(input) => { this.setState({ _abv: input }); }} />
<hr/>
          <input
            type="text"
            id="price"
            placeholder="Price"
            ref={(input) => { this.setState({ _price: input }); }} />
            <hr/>
          <input
            type="text"
            id="pour"
            placeholder="Pour Size"
            ref={(input) => { this.setState({ _pour: input }); }} />
          <button type="submit">Save Beer</button>
        </form>    </div>
    );
  }
}

NewBeer.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeer;