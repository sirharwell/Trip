import React from 'react'

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: {cursor: 'pointer'}
}

const Trip = ({id, complete, name, updateTrip, deleteTrip, showStops, setShowing }) => (
  <div className="col s8">
    <div className="col m8">
      <div style={ styles.pointer } onClick={() => setShowing(id)}>{name}</div>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteTrip(id)}>
      X
    </div>
  </div>
  )

  export default Trip;
