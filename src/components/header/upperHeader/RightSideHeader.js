import React from 'react';
import Icon from '../../common/widgets/Icon';
import LogIn from './LogIn';

const RightSideHeader = () => {
    return (
        <div className="upper-right">
            <div className="socials-wrapper custom-border-right">
                <Icon 
                    className="fab fa-facebook-f"
                />

                <Icon 
                    className="fab fa-twitter"
                />

                <Icon 
                    className="fab fa-youtube"
                />
            </div>
            
            <LogIn />

            <div className="wishlist-wrapper custom-border-right">
                <Icon 
                    className="fas fa-heart"
                />
            </div>

            <div className="shopping-cart-wrapper custom-border-right">
                <Icon 
                    className="fas fa-shopping-cart"
                />
            </div>

            <div className="search-wrapper custom-border-right">
                <Icon 
                    className="fas fa-search"
                />
            </div>
        </div>
    );
}

export default RightSideHeader;