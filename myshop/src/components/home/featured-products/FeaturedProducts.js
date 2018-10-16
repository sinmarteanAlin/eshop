import React from 'react';
import BlackHeader from '../../common/widgets/black-header/BlackHeader';
import Categories from '../categories/Categories';
import { FEATURED_PRODUCTS } from '../../../constants/constants';

const FeaturedProducts = () => {
    return (
        <div className="featured-categories">
            <div className="container">
                <BlackHeader 
                    text="FEATURED PRODUCTS"
                />
                <div className="row">
                    <Categories 
                        categoriesObject={FEATURED_PRODUCTS}
                    />
                </div>
            </div>
        </div>
    );
}

export default FeaturedProducts;