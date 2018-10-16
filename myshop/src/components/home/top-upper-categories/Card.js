import React from 'react';
import './css/style.css';

const Card = (props) => {
    return (
        <div className="col-lg-4">
            <div className="card bg-dark text-white">
                <img className="card-img" src={props.imageSrc} alt="" />
                <div className="card-img-overlay card-content">
                    <h5 className="card-title">{props.titleFirstLine}</h5>
                    <h5 className="card-title">{props.titleSecondLine}</h5>
                    <span className="card-text">{props.percentageOff}</span>
                    <button className="card-button">{props.buttonText}</button>
                </div>
            </div>
        </div>
    );
}

export default Card;




