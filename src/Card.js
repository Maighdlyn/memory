import React, { Component } from 'react'

export default class Card extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="card" id={this.props.id}>
        {this.props.id}
      </div>
    )
  }

}
