import React from 'react';

const Greetings = ( { firstName, lastName } ) => (
    <h3>
      Hello, { firstName } { lastName }!
    </h3>
  );

export default Greetings;