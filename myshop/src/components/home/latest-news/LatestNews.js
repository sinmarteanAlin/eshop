import React from 'react';
import Header from './Header';
import Article from './Article';
import './css/style.css';

const LatestNews = () => {
    return (
        <div className="container latest-news-container">
            <div className="row">
                <Header />  
            </div>
            <div className="row">
                <Article
                    imageUrl = 'https://www.prodesigns.com/wordpress-themes/demo/ecommerce-gem/wp-content/uploads/sites/16/2018/01/tshirt-2428521_1280-370x260.jpg' 
                    title="Remember Us For Shirts, T-Shirts & Casual Clothes"
                    content="Aliquam vel convallis ex. In posuere scelerisque ipsum, vel gravida quam ultrices ac...."
                />
                <Article
                    imageUrl = 'https://www.prodesigns.com/wordpress-themes/demo/ecommerce-gem/wp-content/uploads/sites/16/2018/01/family-2923690_1280-370x260.jpg' 
                    title="Huge Discount On Our Associate Family Marts"
                    content="In non vestibulum metus. Suspendisse purus quam, lacinia sit amet lacinia eu, egestas..."
                />
                <Article
                    imageUrl = 'https://www.prodesigns.com/wordpress-themes/demo/ecommerce-gem/wp-content/uploads/sites/16/2018/01/apparel-1850804_1280-370x260.jpg' 
                    title="We Accept Credit Card Payments On Our Store"
                    content="Nunc et ornare tellus. Quisque imperdiet interdum commodo. Integer laoreet tristique neque quis..."
                />
            </div>
        </div>
    );
}
export default LatestNews;