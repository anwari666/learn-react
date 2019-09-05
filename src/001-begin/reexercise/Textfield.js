import React from 'react';

const Textfield = ({name, onChange, onBlur, error, label}) => (
    <div>
        <label>{ label }</label><br />
            <input 
                name={ name }
                type="text"
                onChange={ onChange }
                onBlur={ onBlur } />
            { error && <div>{error}</div>}
    </div>
)

export default Textfield