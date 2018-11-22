import React from 'react';


const ProductRow = ( { product } ) => (
    <tr>
        <td>
        	<span style={ product.stocked ? {} : { color: 'grey', textDecoration: 'line-through'} }>
        		{ product.name }</span></td>
        <td>
        	<span style={ product.stocked ? {} : { color: 'grey', textDecoration: 'line-through'} }>
        		{ product.price }</span>
        	</td>
    </tr>
)

export default ProductRow;