import React from 'react';

class AddressForm extends React.Component {
  state = { street: '', city: '', state: '', zip: '' }

  handleChange = (e) => {
    this.setState({ 
      street: e.target.value,
      city: e.target.value,
      state: e.target.value,
      zip: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addAddress(this.state.name);
    this.setState({ street: '', city: '', state: '', zip: '' })
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add An Address"
          required
            value={this.state.street}
            value={this.state.city}
            value={this.state.state}
            value={this.state.zip}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default AddressForm;
