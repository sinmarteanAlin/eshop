import React from 'react';
import FooterTitle from './FooterTitle';
import Icon from '../common/widgets/Icon';

const FirstRow = () => {
    return (
        <div className="footer-first-row col-lg-4">
            <FooterTitle 
                text='About eCommerce Gem'
            />
            <p>
                Nunc et ornare tellus. Quisque imperdiet interdum commodo. Integer laoreet tristique neque quis laoreet. Duis ut ultrices est, sed feugiat leo.
            </p>
            <div>
                <Icon 
                    wrapperClass="facebook-icon"
                    className="fab fa-facebook-f"
                />

                <Icon 
                    wrapperClass="twitter-icon"
                    className="fab fa-twitter"
                />

                <Icon 
                    wrapperClass="youtube-icon"
                    className="fab fa-youtube"
                />
            </div>
        </div>
    );
}

export default FirstRow;