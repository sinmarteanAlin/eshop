import React from 'react';
import './css/style.css';
import PurchaseButton from '../../common/widgets/purchase-button/PurchaseButton';

const TrendingSession = () => {
    return (
        <div className="trending-session">
            <div className="content-wrapper">
                <div className="inner-diamond">
                    <div className="outer-diamond">
                        <h3>
                            50%
                        </h3>
                        <h3>
                            OFF
                        </h3>
                    </div>
                    <div className="inner-diamond-text">
                        <h2>Trending Season</h2>
                        <p>
                            START PURCHASE NOW
                        </p>
                        <PurchaseButton 
                            text="PURCHASE NOW"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrendingSession;