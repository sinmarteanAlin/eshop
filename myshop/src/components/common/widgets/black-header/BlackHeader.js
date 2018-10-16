import React from 'react';
import './css/style.css';

const BlackHeader = (props) => {
    return (
        <h5 className="black-header">
            {props.text}
        </h5>
    );  
}

export default BlackHeader;