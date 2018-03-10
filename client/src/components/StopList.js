import React from 'react';
import Stop from './Stop';

const StopList = ({ stops, updateStop, deleteStop, setShowingAddress, showingAddress }) => (
  <div className="row">
    { stops.map( stop =>
        <Stop
          key={stop.id}
          {...stop}
          updateStop={updateStop}
          deleteStop={deleteStop}
          setShowingAddress={setShowingAddress}
          showingAddress={showingAddress}
        />
      )
    }
  </div>
)

export default StopList;
