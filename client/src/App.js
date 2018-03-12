import React, { Component } from 'react';
import TripForm from './components/TripForm';
import TripList from './components/TripList';
import StopForm from './components/StopForm';
import StopList from './components/StopList';
import AddressForm from './components/AddressForm';
import Address from './components/Address';

class App extends Component {
  state = {
    trips: [],
    stops: [],
    address: {},
    showingDetails: null,
    showingAddress: null,
    editingAddress: null,
    editingTrip: null,
    editingStop: null
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
    this.setState({showingDetails: null, showingAddress: null})
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
    this.setState({showingAddress: null})
  }

  showStops = (id) => {
    fetch(`/api/stops/${id}`)
      .then( res => res.json() )
      .then( stops => this.setState({ stops }) )
  }

  addAddress = (name) => {
    let address = { name };
    fetch('/api/addresses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(address)
    }).then( res => res.json() )
      .then( address => {
        const { addresses } = this.state;
        this.setState({ address: [...address, address] });
    })
  }

  updateAddress = (id) => {
    fetch(`/api/addresses/${id}`, { method: 'PUT'})
      .then( res => res.json() )
      .then( address => {
        let addresses = this.state.addresses.map( t => {
          if (t.id === id)
            return address
          return t;
      })
     this.setState({ address });
    })
  }

  deleteAddress = (id) => {
    fetch(`/api/addresses/${id}`, { method: 'DELETE'})
      .then( () => {
        const { addresses } = this.state;
        this.setState({ addresses: addresses.filter( t => t.id !== id ) })
      })
    this.setState({showingDetails: null})
    }

  showAddress = (id) => {
    fetch(`/api/addresses/${id}`)
      .then( res => res.json() )
      .then( address => this.setState({ address: address[0] }) )
  }



  setShowing = (id) => {
    this.setState({showingDetails: id, showingAddress: null})
    this.showStops(id)
  }

  setShowingAddress = (id) => {
    this.setState({showingAddress: id})
    this.showAddress(id)
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
              showingDetails={this.state.showingDetails}
            />
          </div>
          { this.state.showingDetails ?
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
                setShowingAddress={this.setShowingAddress}
                showingAddress={this.state.showingAddress}
                
              />
            </div>
          : <div></div> }
          { this.state.showingAddress ?
              <div className="col m4">
              <h1>Address</h1>
                <AddressForm
                  addAddress={this.addAddress}
                  address_id={this.state.showingDetails}
                />
                <Address
                  address={this.state.address}
                  address_id={this.state.address.id}
                />
              </div>
          : <div></div> }
        </div>
      </div>
    );
  }
}

export default App;
