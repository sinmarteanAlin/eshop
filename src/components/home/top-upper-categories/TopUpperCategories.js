import React from 'react';
import Categories from '../categories/Categories';

const TopUpperCategories = () => {
    const topUpperCategoriesObj = [
        {
            imageSrc: "https://www.prodesigns.com/wordpress-themes/demo/wp-content/uploads/sites/16/2018/01/add-new-1.jpg",
            titleFirstLine: "LADIES",
            titleSecondLine: "SUNGLASSES",
            percentageOff: "50% OFF",
            buttonText: "PURCHASE NOW"
        },
        {
            imageSrc: "https://www.prodesigns.com/wordpress-themes/demo/wp-content/uploads/sites/16/2018/01/add-new-2.jpg",
            titleFirstLine: "FOOTWARE",
            titleSecondLine: "BIG SALE",
            percentageOff: "50% OFF",
            buttonText: "START SHOPPING"
        },
        {
            imageSrc: "https://www.prodesigns.com/wordpress-themes/demo/wp-content/uploads/sites/16/2018/01/add-new-3.jpg",
            titleFirstLine: "SMART",
            titleSecondLine: "WATCHES",
            percentageOff: "50% OFF",
            buttonText: "START SHOPPING"
        }
    ];

    return (
        <div className="container top-upper-categories">
            <div className="row">
                <Categories 
                    categoriesObject={topUpperCategoriesObj}
                />
            </div>
        </div>
    );
}

export default TopUpperCategories;