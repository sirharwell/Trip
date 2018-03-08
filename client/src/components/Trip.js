import React from 'React' 

const styles = {
  complete: {
    textDecoration: 'line-through', 
    color: 'grey'
  },
  pointer: {cursor: 'pointer'}
}

const Trip = ({id, complete, name, updateTrip, deleteTrip }) (
  <div className="col s12">
    <div className="col m8">
      <div style={ complete ? styles.complete : {} } className="center">
        {name}
      </div>
  </div>
  <div className="col m2">
    <input 
      id={`trip-${id}`}
      type="checkbox"
      defaultChecked={complete}
      onClick={() => updateTrip(id)}
     />
    <label htmlFor={`trip-${id}`}>Complete?</label>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteTrip(id)}>
    X
  </div>
  </div>
  )

  export default Trip; 