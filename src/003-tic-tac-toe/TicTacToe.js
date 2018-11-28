import React, { Component } from 'react';
import './TicTacToe.css';
import Board from './Board';
import Util from './Util';

class TicTacToe extends Component{
	constructor( props ){
		super( props );
		this.state = {
			currentPlayer: 'X',
      step: 1,
      history: [
        {
          squares: Array(9).fill(null)
        }
      ]
		}

		this.handleChangePlayer = this.handleChangePlayer.bind(this);
    this.handleClick = this.handleClick.bind(this);
	}

	handleChangePlayer() {
		const { currentPlayer } = this.state;

		this.setState({
			currentPlayer: (currentPlayer === 'X') ? 'O' : 'X',
		})
	}

  handleClick(i) {

    // create new squares
    const current = this.state.history.length - 1;
    let squares = this.state.history[current].squares.slice();
    if (Util.calculateWinner(squares) || squares[i])
      return;
    squares[i] = this.state.currentPlayer;
    
    // create a new history
    const history = this.state.history.concat([{squares}]);
    let step = this.state.step+1;

    this.setState({
      history,
      step
    });

    this.handleChangePlayer();
  }

  // go to a particular step
  goTo(i) {
    const history       = this.state.history.slice(0, i+1);
    const step          = i+1;
    const currentPlayer = (i % 2 === 0) ? 'X' : 'O';

    this.setState({
      history,
      step,
      currentPlayer
    })
  }

	render() {
    const { history } = this.state;

    const moves = history.map(( item, index ) => {
        
          return (<li key={ index } >
                  <button 
                    onClick={ () => this.goTo(index) }>
                    { (index === 0) ? 
                      'Restart game' :
                      'step ' + (index) }
                    </button>
          </li>);
    });

    return (
      <div>
  		  <h2>Exercise 3: TicTacToe </h2>
    	  <p>(from its <a href="https://reactjs.org/tutorial/tutorial.html">official documentation</a>)</p>

		  <div className="game">
			    <div className="game-board">
		        <Board 
            squares={ history[ history.length - 1 ].squares }
		      	currentPlayer={ this.state.currentPlayer }
            onClick={ this.handleClick }
		      	onChangePlayer = { this.handleChangePlayer }/>
		      </div>
		      <div className="game-info">
		        <ol>{ moves.length > 1 && moves }</ol>
		      </div>
		    </div>
      </div>
    );
  }
}

export default TicTacToe;