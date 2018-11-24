import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import './TicTacToe.css';

class TicTacToe extends Component{
	constructor( props ){
		super( props );
		this.state = {
			currentPlayer: 'X',
		}
	}

	handleChangePlayer = () => {
		const { currentPlayer } = this.state;

		this.setState({
			currentPlayer: (currentPlayer === 'X') ? 'O' : 'X',
		})
	}

	render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board 
          	currentPlayer={ this.state.currentPlayer }
          	onChangePlayer = { this.handleChangePlayer }/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default TicTacToe;