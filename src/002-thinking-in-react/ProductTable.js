import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


class ProductTable extends Component {

	arrayNotContain(haystacks, needle){
		
		let filteredOut = true;

		haystacks.some(( haystack ) => {
			if ( ! this.isFilteredOut(haystack, needle) )  // it's in.
				{
					filteredOut = false;
					return true;
				}
			return false;
		});

		return filteredOut;
	}

	// returns true when filtered out
	isFilteredOut(haystack, needle){
		return ( haystack.toLowerCase().indexOf( needle.toLowerCase() ) === -1 )
	}

    render(){
    	const { filterText, inStockOnly } = this.props;
    	const rows = [];
    	let lastCategory = null;

    	// kategori harus udah terurut.
    	this.props.products.forEach( ( product ) => {

    		if ( this.arrayNotContain( [ product.name, product.category ], filterText ) )
    			return;

    		if ( inStockOnly && !product.stocked )
    			return;

    		// this adds the header
    		if (product.category !== lastCategory) {
    			rows.push(
    				<ProductCategoryRow 
    					category={ product.category }
    					key={ product.category } />
    			);
    		}

    		rows.push(
    			<ProductRow 
    				product={ product }
    				key={ product.name } 
    				/>
    			)

    		lastCategory = product.category;
    	});

        return(
            <div>
            	<h3>These are available goods</h3>
            	<table>
	                { rows }
                </table>
            </div>
        )
    }
}

export default ProductTable;