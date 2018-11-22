import React from 'react';

const Greetings = ( { firstName, lastName } ) => (
    <h1>
      Hello, { firstName } { lastName }!
    </h1>
  );

export default Greetings;