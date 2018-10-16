import React from 'react';
import Item from './Item';

const LeftSideHeader = () => {
    return (
        <div className="upper-left">
            <Item 
                iconClass='fas fa-map-marker-alt'
                text='Kathmandu, Nepal'
            />
            <Item 
                iconClass='fas fa-phone'
                text='+977-1-33445566'
            />
            <Item 
                iconClass='fas fa-envelope-open'
                text='info@ecgem.com'
            />
        </div>
    );
}

export default LeftSideHeader;