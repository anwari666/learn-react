import React from 'react'
import Textfield from './Textfield'

const FirstNameField = ({...rest}) =>(
    <Textfield 
        name="firstName" 
        label="First Name:"
        {...rest} />
)

export default FirstNameField;