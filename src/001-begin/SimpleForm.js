import React, { Component } from 'react';
import Greetings from './Greetings';

class SimpleForm extends Component {
  state = {
    firstName : "...",
    firstNameError : "",
  };

  validateName = ( name ) => {
    const regex = /[A-Za-z]{3,}/;

    return !regex.test(name)
      ? "The name must contain at least three letters. Numbers and special characters are not allowed."
      : "";
  };

  onFirstNameBlur = () => {
    const { firstName } = this.state;

    const firstNameError = this.validateName( firstName );

    return this.setState({ firstNameError });
  }

  onFirstNameChange = ( event ) => 
    this.setState({
      firstName : event.target.value
    });

  render(){
    const { firstName, firstNameError } = this.state;

    return (
      <div>
        <label> 
          First Name:
          <input 
            type="text" 
            name="firstName" 
            onChange={ this.onFirstNameChange } 
            onBlur={ this.onFirstNameBlur } />

          { firstNameError && <div>{ firstNameError }</div> }
         </label>
        <Greetings firstName={ firstName } />

      </div>
    )
  }
}

export default SimpleForm;