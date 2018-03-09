import React from 'react';
import Trip from './Trip';

const TripList = ({ trips, updateTrip, deleteTrip, setShowing }) => (
  <div className="row">
    { trips.map( trip =>
        <Trip
          key={trip.id}
          {...trip}
          updateTrip={updateTrip}
          deleteTrip={deleteTrip}
          setShowing={setShowing}
        />
      )
    }
  </div>
)

export default TripList;
