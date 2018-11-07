import React from 'react';

const ImageTextCard = (props) => {
    return (
        <div className="col-lg-3" key={props.id}>
            <div className="card2">
                <div className="view overlay">
                    <img className="card-img-top2" src={props.imageSrc} alt=""/>
                    <div className="mask flex-center rgba-red-strong">
                        <div className="button-wrapper">
                            <button>{props.buttonText}</button>
                        </div>
                    </div>
                </div>
                <div className="card-body2">
                    <h5 className="card-title2">{props.title}</h5>
                </div>
            </div>
        </div>
    );
}

export default ImageTextCard;




