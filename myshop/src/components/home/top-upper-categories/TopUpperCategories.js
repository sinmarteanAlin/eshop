import React from 'react';
import Card from './Card';
import { TOP_UPPER_CATEGORIES } from '../../../constants/constants';

const TopUpperCategories = () => {
    return (
        <div className="container top-upper-categories">
            <div className="row">
                {
                    TOP_UPPER_CATEGORIES.map(item => (
                        
                        <Card
                            key={item.id} 
                            imageSrc={item.imageSrc}
                            titleFirstLine={item.titleFirstLine}
                            titleSecondLine={item.titleFirstLine}
                            percentageOff={item.percentageOff}
                            buttonText={item.buttonText}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default TopUpperCategories;