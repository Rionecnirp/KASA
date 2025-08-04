import React from 'react';

import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import Cards from '../Components/Cards';
import Banner from '../Components/Banner';

const Home = () => {

    return (
        <>
            <Navigation />
            <Banner />
            <Cards />
            <Footer />
        </>
    );
};

export default Home;