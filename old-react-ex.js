import React, { Component } from 'react'

export default class Puppy extends Component {
  constructor() {
    super()
    this.state = {
      name: "Atlas"
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
      </div>
    )
  }
}
