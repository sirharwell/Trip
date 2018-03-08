import React, { Component } from 'react';
import TripForm from './components/TripForm';
import TripList from './components/TripList';


class App extends Component {
  state = { trips: [] }

  componentDidMount() {
    fetch('/api/trips')
      .then( res => res.json() )
      .then( trips => this.setState({ trips }) )
  }

  addTrip = (name) => {
    let trip = { name };
    fetch('/api/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(trip)
    }).then( res => res.json() )
      .then( trip => {
        const { trips } = this.state;
        this.setState({ trips: [...trips, trip] });
    })
  }

  updateTrip = (id) => {
    fetch('/api/trips/${id}', { method: 'PUT'})
      .then( res => res.json() )
      .then( trip => {
        let trips = this.state.trips.map( t => {
          if (t.id === id)
            return trip
          return t;
      })
     this.setState({ trips });
    }) 
  }

  deleteTrip = (id) => {
    fetch('/api/trips/${id}', { method: 'DELETE'})
      .then( () => {
        const { trips } = this.state;
        this.setState({ trips: trips.filter( t => t.id !== id ) })
      })
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
