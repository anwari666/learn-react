import React from 'react'
import Textfield from './Textfield'

const LastNameField = ({...rest}) =>(
    <Textfield 
        name="lastName" 
        label="Last Name:"
        {...rest} />
)

export default LastNameField;