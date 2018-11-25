import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor( props ){
    super( props );

    this.state = {
    	squares : Array(9).fill(null)
    }

    this.handleClick = this.handleClick.bind(this);
  }


  renderSquare(i) {
    return <Square 
    	value = { this.state.squares[i] } 
    	onClick = { () => this.handleClick(i) } />;
  }

  calculateWinner(){
  	const squares = this.state.squares;
  	const winLines = [
		[0,1,2],
		[3,4,5],
		[6,7,8],

		[0,3,6],
		[1,4,7],
		[2,5,8],

		[0,4,8],
		[2,4,6]
	]

  	for (var i = winLines.length - 1; i >= 0; i--) {
  		
  		const [ a,b,c ] = winLines[i];

  		if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
  			return squares[a];
  	}

  	return null;
  }

  handleClick(i) {


  	const squares = this.state.squares.slice();
  	if (this.calculateWinner() || squares[i])
  		return;
  	squares[i] = this.props.currentPlayer;

  	this.setState({
  		squares
  	});

  	this.props.onChangePlayer();
  }

  render() {
  	const winner = this.calculateWinner();
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