import React from 'react';
import PinkButton from '../../common/widgets/pinkButton/PinkButton';

const InnerBox = () => {
    return (
        <div className="inner-box">
            <span>
                Fashion
            </span>
            <h2>
                MEGA SALE
            </h2>
            <hr />
            <h3>
                50% OFF
            </h3>
            <h5>
                ON ORDER ABOVE $999
            </h5>
            <PinkButton
                text="SHOP NOW"
            />
        </div>
    );
}

export default InnerBox;