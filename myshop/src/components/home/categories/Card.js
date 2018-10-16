import React from 'react';

const Card = (props) => {
    return (
        <div className="col-lg-3">
            <div className="card2">
                <div className="view overlay">
                    <img className="card-img-top2" src={props.imageSrc} alt=""/>
                    <div className="mask flex-center rgba-red-strong"></div>
                </div>
                <div className="card-body2">
                    <h5 className="card-title2">{props.title}</h5>
                </div>
            </div>
        </div>
    );
}

export default Card;




