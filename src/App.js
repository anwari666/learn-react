import React from 'react'
import SimpleForm2 from './001-begin/reexercise/SimpleForm2'
import FilterableProductTable from './002-thinking-in-react/FilterableProductTable'
import TicTacToe from './003-tic-tac-toe/TicTacToe'
import TodoApp from './004-redux-todolist/TodoApp'
import Stocky from './005-redux-stocky/Stocky'

// This app is just a functional component
const App = () =>(
  <div style={{
    margin: "0 auto",
    maxWidth: '1280px',
    width: '75%'
  }}>
    <SimpleForm2 />
    <hr />
    <FilterableProductTable />
    <hr />
    <TicTacToe />
    <hr />
    <TodoApp />
    <hr />
    <Stocky />
  </div>
);

export default App;
