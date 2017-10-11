import React, { Component } from 'react'
import Card from './Card'

export default class Board extends Component {
  constructor(){
    super()
    this.state = {
      cards: Array(9).fill(null)
    }
  }

  render() {
    const cardLayout = this.state.cards.map( (card, index) => {
        return <Card key={index} id={index}/>
    })

    return (
      <div className="board">
        {cardLayout}
      </div>
    )
  }

}
