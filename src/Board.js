import React, { Component } from 'react'
export default class Board extends Component{

  constructor(){
    super()
    this.state = {
      cards: Array(4).fill(null)
    }
  }

  render() {
    return (
      <div className="board">
      "something else"
      </div>
    )
  }

}
