import React from 'react';
import Stop from './Stop';

const StopList = ({ stops, updateStop, deleteStop }) => (
  <div className="row">
    { stops.map( stop => 
        <Stop
          key={stop.id}
          {...stop}
          updateStop={updateStop}
          deleteStop={deleteStop}
        />
      )
    }
  </div>
)

export default StopList;