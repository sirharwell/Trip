import React from 'react'

const styles = {
  selected: {
    backgroundColor: 'yellow',
    cursor: 'pointer'
  },
  pointer: {cursor: 'pointer'}
} 

const Stop = ({id, complete, name, updateStop, deleteStop, setShowingAddress, showingAddress }) => (
  <div className="col s8">
    <div className="col m8">
      <div style={ showingAddress === id ? styles.selected : styles.pointer } onClick={() => setShowingAddress(id)}>{name}</div>
    </div>
    <div className="col m2">
      <div style={ styles.pointer } className="col m1" onClick={() => deleteStop(id)}>
        X
      </div>
    </div>
  </div>
  )
  
  export default Stop;
