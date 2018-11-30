import React from 'react';
import SimpleForm from './001-begin/SimpleForm';
import FilterableProductTable from './002-thinking-in-react/FilterableProductTable';
import TicTacToe from './003-tic-tac-toe/TicTacToe';
import todoApp from './004-redux-todolist';

// This app is just a functional component
const App = () =>(
  <div style={{
    margin: "0 auto",
    maxWidth: '1280px',
    width: '75%'
  }}>
    <SimpleForm />
    <hr />
    <FilterableProductTable />
    <hr />
    <TicTacToe />
  </div>
);

export default App;
