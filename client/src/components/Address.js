import React from 'react'

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: {cursor: 'pointer'}
}

const Address = ({id, complete, name, updateAddress, deleteAddress, showAddresses, setShowing }) => (
  <div className="col s8">
    <div className="col m8">
      <div style={ styles.pointer } onClick={() => setShowing(id)}>{name}</div>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteAddress(id)}>
      X
    </div>
  </div>
  )

  export default Address;
