import React, { Component } from 'react'
import obj from '../InfoData.json'

export class Hero extends Component {
  render() {
    return (
      <div>
      <h1> Hero : {this.props.obj.name}</h1>
      </div>
    )
  }
}

export default Hero