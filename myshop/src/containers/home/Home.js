import React from 'react';
import FashionMegaSale from '../../components/home/fashion-mega-sale/FashionMegaSale';
import TopUpperCategories from '../../components/home/top-upper-categories/TopUpperCategories';
import FeaturedCategories from '../../components/home/featured-categories/FeaturedCategories';
import TrendingSession from '../../components/home/trending-session/TrendingSession';
import FeaturedProducts from '../../components/home/featured-products/FeaturedProducts';
import LatestNews from '../../components/home/latest-news/LatestNews.js';
import NewsletterSubscription from '../../components/home/newsletter-subscription/NewsletterSubscription.js'

const Home = () => {
    return (
        <div className="home-page">
            <FashionMegaSale/>
            <TopUpperCategories />
            <FeaturedCategories />
            <TrendingSession />
            <FeaturedProducts />
            <LatestNews />
            <NewsletterSubscription />
        </div>
    );
}

export default Home;