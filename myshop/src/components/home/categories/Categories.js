import React from 'react';
import ImageTextCard from '../../common/widgets/imageTextCard/ImageTextCard';
import './css/style.css';

const TopUpperCategories = (props) => {
    return (
        <div className="container top-upper-categories">
            <div className="row">
                {
                    props.categoriesObject.map(item => (
                        <ImageTextCard
                        key={item.id}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        buttonText={props.buttonText}
                        />
                    ))
                }    
            </div>
        </div>
    );
}

export default TopUpperCategories;