import React from 'react';
import BlackHeader from '../../common/widgets/black-header/BlackHeader';
import Categories from '../categories/Categories';
import { FEATURED_CATEGORIES } from '../../../constants/constants';

const FeaturedCategories = () => {
    return (
        <div className="featured-categories">
            <div className="container">
                <BlackHeader 
                    text="FEATURED CATEGORIES"
                />
                <div className="row">
                    <Categories 
                        categoriesObject={FEATURED_CATEGORIES}
                        buttonText={'VIEW DETAILS'}
                    />
                </div>
            </div>
        </div>
    );
}

export default FeaturedCategories;