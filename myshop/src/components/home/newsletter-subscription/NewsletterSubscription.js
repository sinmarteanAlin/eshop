import React from 'react';
import './css/style.css';
import HomeIcon from './HomeIcon';
import Text from './Text';
import Input from './Input';
import PinkButton from '../../common/widgets/pinkButton/PinkButton';

const NewsletterSubscription = () => {
    return (
        <div className="container-fluid newsletter-subscription-container">
            <div className="container">
                <div className="left-side-part">
                    <HomeIcon />
                    <Text />
                </div>
                <Input />
                <PinkButton 
                    text="SUBSCRIBE"
                />
            </div>
            
        </div>
    );
}
export default NewsletterSubscription;
