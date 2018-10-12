import React from 'react';
import './css/style.css';
import BlackHeader from '../../common/widgets/black-header/BlackHeader';
import Card from './Card';

const FeaturedCategories = () => {
    const FeaturedCategoriesObject = [
        {
            imageSrc: 'https://www.prodesigns.com/wordpress-themes/demo/ecommerce-gem/wp-content/uploads/sites/16/2018/01/product-2-300x300.jpg',
            title:'Accesories (4)'
        },
        {
            imageSrc: 'https://www.prodesigns.com/wordpress-themes/demo/ecommerce-gem/wp-content/uploads/sites/16/2018/01/product-3-300x300.jpg',
            title: 'Casual (6)'
        },
        {
            imageSrc: 'https://www.prodesigns.com/wordpress-themes/demo/ecommerce-gem/wp-content/uploads/sites/16/2018/01/product-4-300x300.jpg',
            title: 'Clothing (12)'
        },
        {
            imageSrc: 'https://www.prodesigns.com/wordpress-themes/demo/ecommerce-gem/wp-content/uploads/sites/16/2018/01/product-1-300x300.jpg',
            title: 'Men (4)'
        } 
    ];

    return (
        <div className="featured-categories">
            <div className="container">
                <BlackHeader 
                    text="FEATURED CATEGORIES"
                />
                <div className="row">
                    {
                        FeaturedCategoriesObject.map(item => (
                            <Card 
                                imageSrc={item.imageSrc}
                                title={item.title}
                            />   
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default FeaturedCategories;