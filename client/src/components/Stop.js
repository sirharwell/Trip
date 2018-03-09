import React from 'react'

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: {cursor: 'pointer'}
} 

const Stop = ({id, complete, name, updateStop, deleteStop, setShowingAddress }) => (
  <div className="col s12">
    <div className="col m8">
      <div style={ styles.pointer } onClick={() => setShowingAddress(id)}>{name}</div>
    </div>
    <div className="col m2">
      <div style={ styles.pointer } className="col m1" onClick={() => deleteStop(id)}>
        X
      </div>
    </div>
  </div>
  )
<<<<<<< HEAD:client/src/components/Stop.js

  // nevermind
  //

=======
  
>>>>>>> Trip number:client/src/components/Stop.Js
  export default Stop;
