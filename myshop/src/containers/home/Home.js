import React from 'react';
import FashionMegaSale from '../../components/home/fashion-mega-sale/FashionMegaSale';
import TopUpperCategories from '../../components/home/top-upper-categories/TopUpperCategories';
import FeaturedCategories from '../../components/home/featured-categories/FeaturedCategories';
import TrendingSession from '../../components/home/trending-session/TrendingSession';
import FeaturedProducts from '../../components/home/featured-products/FeaturedProducts';

const Home = () => {
    return (
        <div className="home-page">
            <FashionMegaSale/>
            <TopUpperCategories />
            <FeaturedCategories />
            <TrendingSession />
            <FeaturedProducts />
            <div className="empty-div"></div>
        </div>
    );
}

export default Home;