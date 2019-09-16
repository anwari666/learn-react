import React, { Component } from 'react'
import Greetings2 from './Greetings2'
import FirstNameField from './FirstNameField'
import LastNameField from './LastNameField'

class SimpleForm2 extends Component {
    state= {
        firstName: 'frst',
        lastName: 'last',
        firstNameError: '',
        lastNameError: '',
    }

    onFirstNameChange = (event) => {
        this.setState ({ firstName : event.target.value })
    }

    onFirstNameBlur = () => {
        const { firstName } = this.state;

        const firstNameError = this.validateName( firstName );

        this.setState( {firstNameError} );
    }

    onLastNameChange = (event) => {
        this.setState ({ lastName : event.target.value })
    }

    onLastNameBlur = () => {
        const { lastName } = this.state;

        const lastNameError = this.validateName( lastName );

        this.setState( {lastNameError} );
    }

    validateName = ( name ) => {
        const regex=/^[a-zA-Z ]{3,}$/;

        return ! regex.test( name ) 
            ? 'must alphabetical and at least 3 letters.'
            : '';
    }

    render(){
        const { firstName, lastName, firstNameError, lastNameError } = this.state;

        return (
        <div>
            <h1>Exercise 1</h1>
            <FirstNameField
                onChange={ this.onFirstNameChange }
                onBlur={ this.onFirstNameBlur }
                error={ firstNameError } />
            
            <LastNameField
                onChange={ this.onLastNameChange }
                onBlur={ this.onLastNameBlur }
                error={ lastNameError } />

            <Greetings2 
                firstName={ firstName } 
                lastName={ lastName }/>
        </div>
        )        
    }
}

export default SimpleForm2