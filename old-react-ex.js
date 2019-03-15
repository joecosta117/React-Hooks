import React, { Component } from 'react'

export default class Puppy extends Component {
  constructor() {
    super()
    this.state = {
      name: "Doggo",
      age: 4
    }
  }
  componentDidMount() {
    document.title = 'Puppy Name: ' + this.state.name
  }
  componentDidUpdate() {
    document.title = 'Puppy Name: ' + this.state.name
  }
  render() {
    return (
      <div>
        <h1>The puppy's name is {this.state.name}</h1>
        <h3>The puppy's age is {this.state.age}</h3>
      </div>
    )
  }
}
