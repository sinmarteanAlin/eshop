import React from 'react';
import Card from './Card';
import './css/style.css';

const TopUpperCategories = (props) => {
    // const topUpperCategoriesObj = [
    //     {
    //         imageSrc: "https://www.prodesigns.com/wordpress-themes/demo/wp-content/uploads/sites/16/2018/01/add-new-1.jpg",
    //         titleFirstLine: "LADIES",
    //         titleSecondLine: "SUNGLASSES",
    //         percentageOff: "50% OFF",
    //         buttonText: "PURCHASE NOW"
    //     },
    //     {
    //         imageSrc: "https://www.prodesigns.com/wordpress-themes/demo/wp-content/uploads/sites/16/2018/01/add-new-2.jpg",
    //         titleFirstLine: "FOOTWARE",
    //         titleSecondLine: "BIG SALE",
    //         percentageOff: "50% OFF",
    //         buttonText: "START SHOPPING"
    //     },
    //     {
    //         imageSrc: "https://www.prodesigns.com/wordpress-themes/demo/wp-content/uploads/sites/16/2018/01/add-new-3.jpg",
    //         titleFirstLine: "SMART",
    //         titleSecondLine: "WATCHES",
    //         percentageOff: "50% OFF",
    //         buttonText: "START SHOPPING"
    //     }
    // ];

    return (
        <div className="container top-upper-categories">
            <div className="row">
                {
                    props.categoriesObject.map(item => (
                        <Card
                            key={item.imageSrc} 
                            imageSrc= {item.imageSrc}
                            titleFirstLine = {item.titleFirstLine}
                            titleSecondLine = {item.titleSecondLine}
                            percentageOff = {item.percentageOff}
                            buttonText = {item.buttonText}
                        />
                    ))
                }    
            </div>
        </div>
    );
}

export default TopUpperCategories;