import React, { Component } from 'react'

class PersonForm extends Component {

constructor(props) {
  super(props)

  this.state = {
    firstName: '',
    lastName: '',
    address: '',
    number: ''
  }
}


handleFirstNameChange = (event) => {
  this.setState({
    firstName: event.target.value
  })
}
handleLastNameChange = (event) => {
  this.setState({
    lastName: event.target.value
  })
}
handleAddressChange = (event) => {
  this.setState({
    address: event.target.value
  })
}
handleNumberChange = (event) => {
  this.setState({
    number: event.target.value
  })
}



handleSubmit = event => {
  alert(`${this.state.title} ${this.state.body}`)
  event.preventDefault()
}


  render() {
    return (
      <form className="col-12" onSubmit={this.handleSubmit}>
      <div>
      <label>First Name</label>
      <input
      type="text"
      value={this.state.firstName}
      onChange ={this.handleFirstNameChange}
      />
      </div>
      <div>
        <label>Last Name</label>
        <input value={this.state.lastName} onChange={this.handleLastNameChange} />
        </div>
        <div>
          <label>Address</label>
          <input value={this.state.address} onChange={this.handleAddressChange} />
          </div>
          <div>
            <label>Number</label>
            <input value={this.state.number} onChange={this.handleNumberChange} />
            </div>
        <button type="submit">Submit</button>
      </form>

)}
}

export default PersonForm;
