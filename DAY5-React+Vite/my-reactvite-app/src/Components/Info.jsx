import React, { Component } from 'react'

export class Info extends Component {
  render(props ) {
    return (
      <div>
        <h1>Info : VU4F2223028
        <table>
          {this.props.table}
        </table></h1>
      </div>
    )
  }
} 

export default Info