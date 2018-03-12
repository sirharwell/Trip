import React from 'react'



class Trip extends React.Component {
 state = {id: this.props.id, 
          name: this.props.name, 
          updateTrip: this.props.updateTrip, 
          deleteTrip: this.props.deleteTrip, 
          showStops: this.props.showStops, 
          setShowing: this.props.setShowing, 
          showingDetails: this.props.showingDetails, 
          editingTrip: this.props.editingTrip,
          editMode: false
        }

 styles = {
  selected: {
    backgroundColor: 'yellow',
    cursor: 'pointer'
  },
  pointer: {cursor: 'pointer'}
  }

  toggleEditMode = () => {
    this.setState({editMode: !this.state.editMode})
  }

  render() { 
    if (this.state.editMode === true) {
      return (
        <div className="col s12 l12">
          <div className="col m12 l12">
            <input type="text" name="tripName" value={`${this.state.name}`}/>
          </div>
          <div className="btn" onClick={() => this.toggleEditMode}>Save</div>
        </div>

      )
    } else if ( this.props.showingDetails === this.state.id) {
      return (
        <div className="col s12 l12">
          <div className="col m12 l12">
            <div style={ this.props.showingDetails === this.state.id ? 
              this.styles.selected : 
              this.styles.pointer } 
              onClick={() => 
                this.props.setShowing(this.props.id)}>{this.props.id}) {this.props.name}
            </div>
          </div>
          <div className="btn" onClick={() => this.toggleEditMode}>Edit</div>
          <div style={ this.styles.pointer } className="btn" onClick={() => this.props.deleteTrip(this.props.id)}>
            Delete
          </div>
        </div>
      )
    } else {
      return (
        <div className="col s12 l12">
          <div className="col m12 l12">
            <div style={ this.props.showingDetails === this.state.id ? this.styles.selected : this.styles.pointer } onClick={() => this.props.setShowing(this.props.id)}>{this.props.id}) {this.props.name}</div>
          </div>
        </div>
      )
    }
    
  }
}
  export default Trip;
