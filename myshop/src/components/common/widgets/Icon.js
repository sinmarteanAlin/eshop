import React from 'react';

const Icon = (props) => {
    return (
        <span className={props.wrapperClass}>
            <i className={props.className}></i>
        </span>
    );
};

export default Icon;