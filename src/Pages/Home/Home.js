import React from 'react';
import Banner from './Banner';
import OurStats from './OurStats';
import Products from './Products';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurStats></OurStats>
            <Review />

        </div>
    );
};

export default Home;