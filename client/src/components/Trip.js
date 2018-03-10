import React from 'react'

const styles = {
  selected: {
    backgroundColor: 'yellow',
    cursor: 'pointer'
  },
  pointer: {cursor: 'pointer'}
}

const Trip = ({id, complete, name, updateTrip, deleteTrip, showStops, setShowing, showingDetails }) => (
  <div className="col s8">
    <div className="col m8">
      <div style={ showingDetails === id ? styles.selected : styles.pointer } onClick={() => setShowing(id)}>{id}) {name}</div>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteTrip(id)}>
      X
    </div>
  </div>
  )

  export default Trip;
