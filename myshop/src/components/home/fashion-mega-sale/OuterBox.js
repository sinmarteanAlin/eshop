import React from 'react';
import InnerBox from './InnerBox';

const OuterBox = () => {
    return (
        <div className="outer-box">
            <InnerBox />
        </div>
    );
}

export default OuterBox;