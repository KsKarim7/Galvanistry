import React from 'react';
import Banner from './Banner';
import OurStats from './OurStats';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurStats></OurStats>

        </div>
    );
};

export default Home;