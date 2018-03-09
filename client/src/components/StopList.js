import React from 'react';
import Stop from './Stop';

const StopList = ({ stops, updateStop, deleteStop, setShowingAddress }) => (
  <div className="row">
    { stops.map( stop =>
        <Stop
          key={stop.id}
          {...stop}
          updateStop={updateStop}
          deleteStop={deleteStop}
          setShowingAddress={setShowingAddress}
        />
      )
    }
  </div>
)

export default StopList;
