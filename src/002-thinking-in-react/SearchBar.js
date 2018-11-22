import React, { Component } from 'react';


class SearchBar extends Component {

    constructor( props ){
        super( props );
        this.handleFilterTextChange = this.handleFilterTextChange.bind( this );
        this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind( this );
    }

    handleFilterTextChange(event){
        this.props.onFilterTextChange( event.target.value );
    }

    handleInStockOnlyChange(event){
        this.props.onInStockOnlyChange( event.target.checked );
    }
    
    render(){
        return(
            <div>
                <input name="search" placeholder="Filter Product" value={ this.props.filterText } onChange={ this.handleFilterTextChange } /> <br />
                <label>
                    <input type="checkbox" 
                        checked={ this.props.inStockOnly } 
                        name="inStockOnly" 
                        onChange={ this.handleInStockOnlyChange } 
                        /> 
                        hide out-of-stock product? 
                </label>
            </div>
        )
    }
}

export default SearchBar;