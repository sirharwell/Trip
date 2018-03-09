import React from 'react'

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: {cursor: 'pointer'}
}

const Address = ({id, complete, name, address, updateAddress, deleteAddress, showAddresses }) => (
  <div className="col s8">
    <div>
      Street: {address.street}
      <br/>
      City: {address.city}
      <br/>
      State: {address.state}
      <br/>
      Zip: {address.zip}
    </div>
  </div>
  )

  export default Address;
