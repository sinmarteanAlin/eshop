import React from 'react';
import './css/style.css';
import HomeIcon from './HomeIcon';
import Text from './Text';
import Input from './Input';
import Button from './Button';

const NewsletterSubscription = () => {
    return (
        <div className="container-fluid newsletter-subscription-container">
            <div className="container">
                {/* <div className="row"> */}
                    <div className="left-side-part">
                        <HomeIcon />
                        <Text />
                    </div>
                    <Input />
                    <Button />

                {/* </div> */}
            </div>
            
        </div>
    );

}
export default NewsletterSubscription;
