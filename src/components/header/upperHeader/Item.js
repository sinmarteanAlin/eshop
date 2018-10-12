import React from 'react';
import Icon from '../../common/widgets/Icon';

const Item = (props) => {
    return (
        <div>
            <Icon 
                className={props.iconClass}
            />
            <span>
                {props.text}
            </span>
        </div>
    );
}

export default Item;