import React from 'react';
import Card from './Card';
import './css/style.css';

const TopUpperCategories = (props) => {
    return (
        <div className="container top-upper-categories">
            <div className="row">
                {
                    props.categoriesObject.map(item => (
                        <Card 
                            imageSrc={item.imageSrc}
                            title={item.title}
                        />   
                    ))
                }    
            </div>
        </div>
    );
}

export default TopUpperCategories;