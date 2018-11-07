import React from 'react';
import './css/style.css';

const PinkButton = (props) => {
    return (
        <div className="pink-button-container">
            <button>
                {props.text}
            </button>
        </div>
    )
}
export default PinkButton;