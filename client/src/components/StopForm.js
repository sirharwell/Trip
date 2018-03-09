import React from 'react';

class StopForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStop(this.state.name);
    this.setState({ name: '' })
  }

  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add A Stop"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default StopForm;