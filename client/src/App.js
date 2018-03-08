import React, { Component } from 'react';
import TripForm from './components/TripForm';
import TripList from './components/TripList';



class App extends Component {
  state = { trips: [] }

  componentDidMount() {
  }

  addTrip = (name) => {
  }

  updateTrip = (id) => {
  }

  deleteTrip = (id) => {
  }

  render() {
    return (
      <div className="container">
        <TripForm addTrip={this.addTrip} />
        <TripList
          trips={this.state.trips}
          updateTrip={this.updateTrip}
          deleteTrip={this.deleteTrip}
        />
      </div>
    );
  }
}

export default App;
