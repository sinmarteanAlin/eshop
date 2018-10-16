import React from 'react';
import FooterTitle from './FooterTitle';
import Icon from '../common/widgets/Icon';

const SecondRow = () => {
    return (
        <div className="footer-second-row col-lg-4">
            <FooterTitle 
                text='Contact Us'
            />
            <div>
                <Icon 
                    className="fas fa-map-marked"
                />
                <span>
                    Bansbari-03, Kathmandu
                </span>
            </div>
            <div>
                <Icon 
                    className="far fa-envelope-open"
                />
                <span>
                    info@promenadethemes.com
                </span>
            </div>
            <div>
                <Icon 
                    className="fas fa-mobile"    
                />
                <span>
                    +977-1-2344478
                </span>
            </div>
            <div>
                <Icon
                    className="fas fa-globe"
                />
                <span>
                    https://promenadethemes.com
                </span>
            </div>
        </div>
    );
}

export default SecondRow;