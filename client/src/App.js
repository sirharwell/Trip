import React, { Component } from 'react';
import TripForm from './components/TripForm';
import TripList from './components/TripList';
import StopForm from './components/StopForm';
import StopList from './components/StopList';


class App extends Component {
  state = {
    trips: [],
    stops: [],
    showingDetails: null,
   }

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
    fetch(`/api/trips/${id}`, { method: 'PUT'})
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
    fetch(`/api/trips/${id}`, { method: 'DELETE'})
      .then( () => {
        const { trips } = this.state;
        this.setState({ trips: trips.filter( t => t.id !== id ) })
      })
    this.setState({showingDetails: false})
    }

  addStop = (name, trip_id) => {
    let stop = { name, trip_id };
    fetch('/api/stops', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(stop)
    }).then( res => res.json() )
      .then( stop => {
        const { stops } = this.state;
        this.setState({ stops: [...stops, stop] });
    })
  }

  updateStop = (id) => {
    fetch(`/api/stops/${id}`, { method: 'PUT'})
      .then( res => res.json() )
      .then( stop => {
        let stops = this.state.stops.map( t => {
          if (t.id === id)
            return stop
          return t;
      })
      this.setState({ stops });
    })
  }

  deleteStop = (id) => {
    fetch(`/api/stops/${id}`, { method: 'DELETE'})
      .then( () => {
        const { stops } = this.state;
        this.setState({ stops: stops.filter( t => t.id !== id ) })
      })
  }

  showStops = (id) => {
    fetch(`/api/stops/${id}`)
      .then( res => res.json() )
      .then( stops => this.setState({ stops }) )
  }

  setShowing = (id) => {
    this.setState({showingDetails: id})
    this.showStops(id)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col m4">
          <h1>My Trips</h1>
            <TripForm addTrip={this.addTrip} />
            <TripList
              trips={this.state.trips}
              updateTrip={this.updateTrip}
              deleteTrip={this.deleteTrip}
              showStops={this.showStops}
              setShowing={this.setShowing}
            />
          </div>
          <div className="col m4">
          <h1>Stops</h1>
            <StopForm
              addStop={this.addStop}
              trip_id={this.state.showingDetails}
            />
            <StopList
              stops={this.state.stops}
              updateStop={this.updateStop}
              deleteStop={this.deleteStop}
            />
          </div>
          <div className="col m4">
          <h1>Addresses</h1>
            <StopForm
              addStop={this.addStop}
              trip_id={this.state.showingDetails}
            />
            <StopList
              stops={this.state.stops}
              updateStop={this.updateStop}
              deleteStop={this.deleteStop}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
