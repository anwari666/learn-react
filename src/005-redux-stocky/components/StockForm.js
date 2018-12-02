import React from 'react'

const StockForm = ( props ) => (
<form>
    What if starting from
        <input placeholder="month" type="text" /> 
        <input placeholder="year" type="text" /> 
        I invested a sum of $<input placeholder="10,000" type="number" /> 
        in these companies:
        <input placeholder="companies" type="text" /> divided equally.
    
    <button type="submit" name="submit" >Find out!</button>
</form>
)

export default StockForm