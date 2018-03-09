import React from 'react' 
 
const styles = {
  complete: {
    textDecoration: 'line-through', 
    color: 'grey'
  },
  pointer: {cursor: 'pointer'}
} 

const Stop = ({id, complete, name, updateStop, deleteStop }) => (
  <div className="col s12">
    <div className="col m8">
      {name}
    </div>
    <div className="col m2">
      <div style={ styles.pointer } className="col m1" onClick={() => deleteStop(id)}>
        X
      </div>
    </div>
  </div>
  )

  export default Stop; 