import React from 'react';

const Input = (props) => {
    return (
        <input 
            type={props.inputType}
            value={props.value}
            placeholder={props.placeholder} 
        />
    );
}
export default Input;