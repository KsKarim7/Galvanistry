import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import OurStats from './OurStats';
import Products from './Products';
import Review from './Review';
import Sale from './Sale';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurStats></OurStats>
            <Review />
            <Sale />
            <AboutUs />

        </div>
    );
};

export default Home;