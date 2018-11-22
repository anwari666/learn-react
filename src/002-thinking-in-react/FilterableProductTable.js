import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {
  
  constructor( props ){
    super( props );

    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.onFilterTextChange = this.onFilterTextChange.bind( this );
    this.onInStockOnlyChange = this.onInStockOnlyChange.bind( this );
  }

  onFilterTextChange( filterText ){
    this.setState({
      filterText
    })
  }

  onInStockOnlyChange( inStockOnly ){
    this.setState({
      inStockOnly
    })
  }

  render(){
    return (
      <div>
        <h2>Exercise 2: Thinking in React </h2>
        <p>(from its <a href="https://reactjs.org/docs/thinking-in-react.html">official documentation</a>)</p>
        <SearchBar 
          filterText={ this.state.filterText }
          inStockOnly={ this.state.inStockOnly } 
          onFilterTextChange={ this.onFilterTextChange }
          onInStockOnlyChange={ this.onInStockOnlyChange } />
        <ProductTable 
          filterText={ this.state.filterText }
          inStockOnly={ this.state.inStockOnly } 
          products={ PRODUCTS } />
      </div>
    )
  }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default FilterableProductTable;