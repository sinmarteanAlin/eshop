import React from 'react';
import './css/style.css';

const PurchaseButton = (props) => {
    return (
        <button className="purchase-button-widget">{props.text}</button>
    )
}

export default PurchaseButton;