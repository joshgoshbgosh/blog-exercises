import React, { Component } from 'react'

class BlogForm extends Component {

constructor(props) {
  super(props)

  this.state = {
    title: '',
    body: ''
  }
}


handleTitleChange = (event) => {
  this.setState({
    title: event.target.value
  })
}
handleBodyChange = event => {
  this.setState({
    body: event.target.value
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
      <label>Title</label>
      <input
      type="text"
      value={this.state.title}
      onChange ={this.handleTitleChange}
      />
      </div>
      <div>
        <label>Body</label>
        <textarea value={this.state.body} onChange={this.handleBodyChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

)}
}

export default BlogForm;
