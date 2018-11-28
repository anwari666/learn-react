import React, { Component } from 'react';
import Square from './Square';
import Util from './Util';

class Board extends Component {

  renderSquare(i) {
    const squares = this.props.squares;
    return <Square 
    	value = { squares[i] } 
    	onClick = { () => this.props.onClick(i) } />;
  }


  render() {
  	const winner = Util.calculateWinner(this.props.squares);
    let status = 'Current player: ' + this.props.currentPlayer;

  	if (winner)
    	status = 'Winner: ' + winner;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;