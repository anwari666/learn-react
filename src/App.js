import React, { Component } from 'react';
import SimpleForm from './001-begin/SimpleForm';
import FilterableProductTable from './002-thinking-in-react/FilterableProductTable';

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
  </div>
);

export default App;
