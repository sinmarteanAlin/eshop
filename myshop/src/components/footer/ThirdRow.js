import React from 'react';
import FooterTitle from './FooterTitle';

const ThirdRow = () => {
    return (
        <div className="footer-third-row col-lg-4">
            <div className="element">
                <div className="left-side">
                    <span>
                        <i className="fas fa-map-marked"></i>
                    </span>
                </div>
                <div className="right-side">
                    <FooterTitle 
                        text='Free Shipping & Return'
                    />
                    <span>
                        Free shipping on all orders above $99
                    </span>
                </div>
            </div>
            <div className="element">
                <div className="left-side">
                    <span>
                        <i className="fas fa-wallet"></i>
                    </span>
                </div>
                <div className="right-side">
                    <FooterTitle 
                        text='Money Back className'
                    />
                    <span>
                        100% Money Back Guarantee
                    </span>
                </div>
            </div>
            <div className="element">
                <div className="left-side">
                    <span>
                        <i className="fab fa-facebook-messenger"></i>
                    </span>
                </div>
                <div className="right-side"> 
                    <FooterTitle 
                        text='24/7 Online Support'
                    />
                    <span>
                        Support staffs ready to help you
                    </span>
                </div>
            </div>
           
        </div>
    );
}

export default ThirdRow;